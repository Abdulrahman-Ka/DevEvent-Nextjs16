import mongoose from "mongoose";

// Define the cached connection interface with proper types
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global namespace to include our mongoose cache
declare global {
  var mongoose: CachedConnection | undefined;
}

// Initialize the cached connection object
// In development, use a global variable to preserve the connection across hot reloads
const cached: CachedConnection = global.mongoose || {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes a connection to MongoDB using Mongoose
 * Implements connection caching to prevent multiple connections during development
 * @returns Promise<typeof mongoose> - The mongoose instance
 */
async function connectDB(): Promise<typeof mongoose> {
  // Return the cached connection if it exists
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection promise doesn't exist, create one
  if (!cached.promise) {
    const MONGODB_URI = process.env.MONGODB_URI;

    // Throw an error if the connection string is not defined
    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }

    const options = {
      bufferCommands: false, // Disable command buffering to avoid potential issues
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Wait for the connection to be established and cache it
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise on error so the next call attempts a new connection
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
