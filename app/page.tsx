import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section id="home" className="flex flex-col items-center gap-10">
      <header className="flex flex-col items-center gap-4 text-center max-w-2xl ">
        <h1>
          The Hub for Every Dev
          <br />
          Event You Can&apos;t Miss
        </h1>
        <p className="subheading">
          Hackathons, meetups, and conferences — all in one place.
        </p>
        <ExploreBtn />
      </header>

      <section className="w-full mt-10 space-y-6">
        <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <h3>Featured events</h3>
          <p className="text-sm text-light-200">
            Curated highlights from the community. Discover what&apos;s
            happening next.
          </p>
        </div>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
};
export default page;
