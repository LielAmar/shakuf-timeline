import { useState } from "react";

import Image from "next/image";

import ArticleWrapper from "@/components/content/article/ArticleWrapper";

import { Content } from "@/types/content";
import { Article } from "@/types/article";
import { Event } from "@/types/event";

const EventItem = ({ event }: { event: Event }) => {
  const convertDate = (date: string) => {
    const dateObj = new Date(date);

    let day = dateObj.getDay() + 1 + "";
    if (dateObj.getDay() < 9) {
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

    return (
      <div className="flex flex-col">
        <p className="text-center leading-[1.75rem] font-bold text-[25px] text-[#E83C3C]">
          {day}
        </p>

        <p className="text-center leading-[1.75rem] font-bold text-[25px] text-[#E83C3C]">
          {month}
        </p>
      </div>
    );
  };

  return (
    <div
      className="relative left-[4.1rem]
        flex flex-row h-[100%] z-10"
    >
      <div className="flex flex-row w-full items-center">
        <Image
          src="images/event_line.svg"
          alt="event_line"
          width={184}
          height={124}
        />

        <div className="w-[40rem] mr-[0.5rem]">
          <p className="text-[28px] text-[#EB4747] font-bold">{event.title}</p>
        </div>

        <div className="relative w-[8rem] left-[41.5rem]">
          <p className="text-center leading-[1.75rem] font-bold text-[25px] text-[#E83C3C]">
            {convertDate(event.date)}
          </p>
        </div>
      </div>
    </div>
  );
};

const ArticleItem = ({ article }: { article: Article }) => {
  return (
    <div
      className="relative left-[1.48rem]
        flex flex-row h-[100%] z-10"
    >
      <div className="flex flex-row w-full items-center">
        <Image
          src="images/article_line.svg"
          alt="article_line"
          width={210}
          height={40}
        />

        <div className="relative w-[40rem] h-[80%] border-[#E83C3C] border-2 rounded-[30px]">
          {/* <ArticleWrapper article={article} /> */}
        </div>
      </div>
    </div>
  );
};

const ContentItem = ({ content }: { content: Content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getFullHeight = (type: string) =>
    type == "event" ? "h-[160px]" : "h-[15rem]";
  const getPartialHeight = () => (isOpen ? "h-[37.5rem]" : "h-[4rem]");

  return (
    <div className={`flex flex-row w-full`}>
      {/* Timeline Vertical Line */}
      <div className={`z-1 mr-[5rem] ${getFullHeight(content.type)}`}>
        <div className={`w-[8px] z-0 ${getFullHeight(content.type)} bg-black`}>
          ‎
        </div>
      </div>

      {/* Event */}
      {content.type === "event" && (
        <div className={`${getFullHeight(content.type)}`}>
          <EventItem event={content as Event} />
        </div>
      )}

      {/* Article */}
      {content.type === "article" && (
        <div className={`${getFullHeight(content.type)}`}>
          <ArticleItem article={content as Article} />
        </div>
      )}
    </div>
  );
};

export default ContentItem;
