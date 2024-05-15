"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { doc, onSnapshot, setDoc } from "firebase/firestore";

import { DetailsScheme } from "@/types/schemes";
import { Article } from "@/types/article";
import { Content } from "@/types/content";

import { db } from "@/config/firebase";

import Page from "@/components/layout/Page";
import { notFound } from "next/navigation";

export default function Home() {
  const [attemptedLoad, setAttemptedLoad] = useState(false);
  const [details, setDetails] = useState<DetailsScheme | null>(null);
  const [content, setContent] = useState<Content[] | null>(null);

  // Retrieve the details document from the database
  useEffect(() => {
    const details_document = doc(db, "mahapeha", "details");
    const content_document = doc(db, "mahapeha", "content");

    onSnapshot(details_document, (doc: any) => {
      if (doc.exists() === false) {
        setAttemptedLoad(true);
        return;
      }

      setDetails(doc.data());
    });

    onSnapshot(content_document, (doc: any) => {
      if (doc.exists() === false) {
        setAttemptedLoad(true);
        return;
      }

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
    if (attemptedLoad) {
      return notFound();
    }

    return (
      <main className="h-screen w-screen flex justify-center items-center">
        <Image
          className="h-[500px] w-[500px]"
          src="/images/slow_loading.gif"
          alt="loading"
          width={500}
          height={500}
          priority={true}
        />
      </main>
    );
  }

  return <Page details={details} content={content} />;
}
