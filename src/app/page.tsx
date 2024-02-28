"use client";

import IntroText from "@/components/page/content/IntroText";
import Navbar from "@/components/layout/Navbar";
import Timeline from "@/components/page/content/timeline/Timeline";
import { useEffect, useState } from "react";
import { DetailsScheme } from "@/types/schemes";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Article } from "@/types/article";
import { Content } from "@/types/content";

export default function Home() {
  const [details, setDetails] = useState<DetailsScheme | null>(null);
  const [content, setContent] = useState<Content[] | null>(null);

  // Retrieve the details document from the database
  useEffect(() => {
    const details_document = doc(db, "shakuf", "details");
    const content_document = doc(db, "shakuf", "content");

    onSnapshot(details_document, (doc: any) => {
      setDetails(doc.data());
    });

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

  if(!details || !content) {
    return <div>loading...</div>
  } 


  return (
    <main
      className="flex flex-col min-h-screen justify-between overscroll-auto
          bg-[#FAF6F1]"
    >
      <Navbar details={details} />

      <div className="w-[90%] grid grid-cols-6 grid-rows-1 mt-[14rem]">
        <div
          className="flex flex-col gap-[3rem]
             row-start-1 col-start-2 col-end-6 mx-[4rem] 2xl:mx-[8rem]"
        >
          <IntroText details={details} />

          <Timeline content={content} />
        </div>

        <div className="row-start-1 col-start-6 col-end-6">
          <Minimap />
        </div>
      </div>
    </main>
  );
}
