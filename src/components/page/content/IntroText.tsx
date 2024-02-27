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
    <p>
      <span className="text-[28px] font-bold text-[#EE583F] leading-tight font-serif">
        {details.header.start_text}
      </span>
      <span className="text-[24px] font-normal text-black leading-tight font-sans">
        {details.header.rest_text}
      </span>
    </p>
  );
};

export default IntroText;
