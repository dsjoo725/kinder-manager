import type { Metadata } from "next";
import localFont from "next/font/local";

import style from "./style.module.css";

import "@/styles/global.css";

const Pretendard = localFont({
  src: "../public/woff2/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinder Manager",
  description: "Fullstack App with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={Pretendard.className}>
      <body>
        <div className={style.layout}>{children}</div>
      </body>
    </html>
  );
}
