import type { Metadata } from "next";
import "./globals.css";

import localFont from "@next/font/local";

const days = localFont({
  src: [
    {
      path: "../../public/fonts/Days-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Days-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-days",
});

const narkis = localFont({
  src: [
    {
      path: "../../public/fonts/MF_NarkisBlock-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-BoldCondensed.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-MediumCondensed.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Thin.otf",
      weight: "300",
    },
  ],
  variable: "--font-narkis",
});

const narkis_block = localFont({
  src: [
    {
      path: "../../public/fonts/MF_NarkisBlock-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-BoldCondensed.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-MediumCondensed.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/MF_NarkisBlock-Thin.otf",
      weight: "300",
    },
  ],
  variable: "--font-narkis-block",
});

// const narkis_block = localFont({
//   src: [
//     {
//       path: "../../public/fonts/NarkisBlockStudio-Bold.ttf",
//       weight: "700",
//     },
//     {
//       path: "../../public/fonts/NarkisBlockStudio-Medium.ttf",
//       weight: "500",
//     },
//     {
//       path: "../../public/fonts/NarkisBlockStudio-Regular.ttf",
//       weight: "400",
//     },
//     {
//       path: "../../public/fonts/NarkisBlockStudio-Thin.ttf",
//       weight: "300",
//     },
//   ],
//   variable: "--font-narkis-block",
// });

export const metadata: Metadata = {
  title: "Shakuf Timeline",
  description: "A timeline of a certain topic in Shakuf's news-site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${days.variable} ${narkis.variable} ${narkis_block.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
