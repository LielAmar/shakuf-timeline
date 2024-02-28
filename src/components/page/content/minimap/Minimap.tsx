"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";

import { Content } from "@/types/content";
import { Article } from "@/types/article";
import { Event } from "@/types/event";
import TimelineContent from "./TimelineContent";

const Minimap = () => {
  const [content, setContent] = useState<Content[] | null>(null);

  useEffect(() => {
    const content_document = doc(db, "shakuf", "content");

    onSnapshot(content_document, (doc: any) => {
      const articles = doc
        .data()
        .articles.map((article: Article) => ({ ...article, type: "article" }));
      const events = doc
        .data()
        .events.map((event: Event) => ({ ...event, type: "event" }));

      const full_content = [...articles, ...events];

      const sorted_content = full_content.sort((a: Content, b: Content) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

      setContent(sorted_content);
    });
  }, []);

  if (!content) {
    return <div>Getting content...</div>;
  }

  return (
    <div className="w-full fixed">
      this is text
    </div>
  );
};

export default Minimap;