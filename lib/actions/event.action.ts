"use server";

import { Event } from "@/database";
import connectDB from "../mongodb";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();

    const event = await Event.findOne({ slug });

    if (!event) {
      throw new Error(`Event not found for slug: ${slug}`);
    }

    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();
  } catch (error) {
    console.error("Get Similar Events By Slug Failed to fetch similar events", {
      slug,
      error,
    });

    throw new Error("Failed to fetch similar events. Please try again later.");
  }
};
