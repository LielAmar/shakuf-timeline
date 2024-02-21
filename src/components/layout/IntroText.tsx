"use client";

import { useEffect, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";
import { DetailsScheme } from "@/types/schemes";

const IntroText = () => {
  const [details, setDetails] = useState<DetailsScheme | null>(null);

  // Retrieve the details document from the database
  useEffect(() => {
    const details_document = doc(db, "shakuf", "details");

    onSnapshot(details_document, (doc: any) => {
      setDetails(doc.data());
    });
  }, []);

  if (!details) {
    // TODO: change this loading screel
    return <div>Getting content...</div>;
  }

  return (
    <p className="text-[24px] font-thin text-black leading-tight font-sans">
      {details.header.text}
    </p>
  );
};

export default IntroText;
