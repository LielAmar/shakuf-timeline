import { Event } from "@/types/event";
import Image from "next/image";

const convertDate = (date: string) => {
  const dateObj = new Date(date);

  let day = dateObj.getDate() + "";
  if (dateObj.getDate() < 9) {
    day = "0" + day;
  }

  let month = dateObj.getMonth() + "";

  if (month == "0") {
    month = "ינואר";
  }
  if (month == "1") {
    month = "פברואר";
  }
  if (month == "2") {
    month = "מרץ";
  }
  if (month == "3") {
    month = "אפריל";
  }
  if (month == "4") {
    month = "מאי";
  }
  if (month == "5") {
    month = "יוני";
  }
  if (month == "6") {
    month = "יולי";
  }
  if (month == "7") {
    month = "אוגוסט";
  }
  if (month == "8") {
    month = "ספטמבר";
  }
  if (month == "9") {
    month = "אוקטובר";
  }
  if (month == "10") {
    month = "נובמבר";
  }
  if (month == "11") {
    month = "דצמבר";
  }

  return day + " " + month;
};

const TimelineEvent = ({ event }: { event: Event }) => {
  const isLast = event.title == "היום";

  return (
    <div
      className="flex flex-row items-center
              relative left-[1.05rem] z-10
              w-full"
    >
      <Image
        src="images/event_circle.svg"
        alt="event_circle"
        width={32}
        height={32}
      />

      <div className="w-[8.5rem] mr-[2.5rem]">
        <p className="text-[25px] font-regular text-[#EE583F] leading-tight font-serif">
          {isLast ? event.title : convertDate(event.date)}
        </p>
      </div>

      {!isLast && (
        <Image
          src="images/event_rectengle.svg"
          alt="event_rectengle"
          width={16}
          height={16}
        />
      )}

      {!isLast && (
        <div className="w-[24rem] mr-[1rem]">
          <p className="text-[25px] font-bold text-[#EE583F] leading-tight font-serif">
            {event.title}
          </p>
        </div>
      )}
    </div>
  );
};

export default TimelineEvent;
