"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { doc, onSnapshot } from "firebase/firestore";

import { db } from "@/config/firebase";
import { DetailsScheme } from "@/types/schemes";

const Header = () => {
  const [hasMargin, setHasMargin] = useState<boolean>(true);
  const [details, setDetails] = useState<DetailsScheme | null>(null);

  // Retrieve the details document from the database
  useEffect(() => {
    const details_document = doc(db, "shakuf", "details");

    onSnapshot(details_document, (doc: any) => {
      setDetails(doc.data());
    });
  }, []);

  // TODO: change date format from mm-dd-yy to dd/mm/yy

  // Handle the scroll event
  useEffect(() => {
    const handleScrollEvent = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setHasMargin(false);
      } else {
        setHasMargin(true);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  if (!details) {
    // TODO: change this loading screel
    return <div>Getting content...</div>;
  }

  return (
    <div
      className={`w-[70%] mr-[6rem] py-3
        flex flex-row flex-center fixed top-0 right-0
        transition-all duration-300 border-b-[4px] border-black
        from-white z-50
        ${hasMargin && "mt-10"}`}
    >
      <div className="flex flex-row items-center gap-3 mr-[3rem]">
        <Image
          className=""
          src={details.logo_url}
          alt="logo"
          width={124}
          height={48}
        />

        <p className="text-[36px] font-bold text-black">{details.page_title}</p>
      </div>
    </div>
  );
};

export default Header;
