import type { Metadata } from "next";

import "@/styles/global.css";

import style from "./style.module.css";

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
    <html lang="ko">
      <body>
        <div className={style.layout}>{children}</div>
      </body>
    </html>
  );
}
