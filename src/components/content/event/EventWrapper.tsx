import { Event } from "@/types/event";

const EventWrapper = ({ event, index }: { event: Event; index: number }) => {
  return (
    <div
      className={`col-start-1 col-end-1 row-start-${index} row-end-${index}`}
    >
      <p>this is an event</p>
      <h1>{event.title}</h1>

      <h3>{event.date}</h3>
    </div>
  );
};

export default EventWrapper;
