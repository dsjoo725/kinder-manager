import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
