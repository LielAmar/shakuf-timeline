"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { DetailsScheme } from "@/types/schemes";

const Navbar = ({ details }: { details: DetailsScheme | null }) => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  // Handle the fixed navbar on scroll (Remove the margin at the lower part)
  useEffect(() => {
    const handleScrollEvent = () =>
      setHasScrolled(window.scrollY > 50 ? true : false);

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  if (!details) {
    return <></>;
  }

  return (
    <div
      className={`w-[100%] flex flex-col items-center gap-[30px]
      ${hasScrolled ? "pt-[10px]" : "pt-[30px]"}
      fixed top-0 right-0 transition-all duration-300
      bg-gradient-to-b from-[#FAF6F1] from-85% via-[#FAF6F1] to-transparent z-50`}
    >
      <Image
        className=""
        src={details.logo_url}
        alt="logo"
        width={100}
        height={36}
      />

      <div
        className="w-[83%] flex flex-row justify-between p-[10px]
        border-b-[1px] border-t-[1px] border-black"
      >
        {details.navbar.map((item: any, index: number) => {
          return (
            <p
              className={`text-[20px] font-bold font-serif 
               ${item.includes("{current}") ? "text-[#EE583F]" : "text-black"}
               cursor-pointer`}
              key={index}
            >
              {item.replace("{current}", details.page_title)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
