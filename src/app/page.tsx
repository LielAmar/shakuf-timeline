"use client";

import IntroText from "@/components/page/content/IntroText";
import Navbar from "@/components/layout/Navbar";
import Timeline from "@/components/page/content/timeline/Timeline";
import { useEffect, useState } from "react";
import { DetailsScheme } from "@/types/schemes";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { Article } from "@/types/article";
import { Content } from "@/types/content";
import Minimap from "@/components/page/content/minimap/Minimap";
import Image from "next/image";
import { gaza_war_content_scheme, gaza_war_details_scheme, mahapeha_content_scheme, mahapeha_details_scheme } from "@/config/db_schemes";

export default function Home() {
  const [details, setDetails] = useState<DetailsScheme | null>(null);
  const [content, setContent] = useState<Content[] | null>(null);

  // Retrieve the details document from the database
  useEffect(() => {
    const details_document = doc(db, "gaza_war", "details");
    const content_document = doc(db, "gaza_war", "content");

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

  if (!details || !content) {
    return (
      <main className="h-screen w-screen flex justify-center items-center">
        <Image
          className="h-[500px] w-[500px]"
          src="/images/loading.gif"
          alt="loading"
          width={500}
          height={500}
          priority={true}
        />
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Navbar details={details} />

      <div className="w-[90%] grid grid-cols-6 grid-rows-1 mt-[14rem]">
        <div
          className="flex flex-col gap-[3rem]
             row-start-1 col-start-2 col-end-6 mx-[4rem] 2xl:mx-[8rem]"
        >
          <IntroText details={details} />

          <Timeline content={content} />
        </div>

        <div className="flex justify-center row-start-1 col-start-6 col-end-6">
          <div className="fixed">
            <Minimap content={content} />
          </div>
        </div>
      </div>
    </main>
  );
}
