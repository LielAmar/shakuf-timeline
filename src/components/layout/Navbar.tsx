"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { DetailsScheme, NavbarItem } from "@/types/schemes";

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
      className={`w-[100%] flex flex-col items-center gap-[18px]
      ${hasScrolled ? "pt-[15px]" : "pt-[18px]"}
      fixed top-0 right-0 transition-all duration-300
      bg-gradient-to-b from-[#FAF6F1] from-85% via-[#FAF6F1] to-transparent z-50`}
    >
      <Image
        className=""
        src="/images/logo.svg"
        alt="logo"
        width={82}
        height={55}
      />

      <div
        className="w-[67%] flex flex-row justify-between py-[5px]
        border-b-[1px] border-t-[1px] border-black"
      >
        {details.navbar.map((item: NavbarItem, index: number) => {
          return (
            <a
              className={`text-[18px] font-bold font-sans 
               ${
                 item.name.includes("{current}")
                   ? "text-[#EE583F]"
                   : "text-black"
               }
               cursor-pointer`}
              key={index}
              href={item.link}
            >
              {item.name.replace("{current}", details.page_title)}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
