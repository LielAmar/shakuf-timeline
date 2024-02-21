import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
