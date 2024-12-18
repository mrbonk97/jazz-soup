import "./globals.css";
import type { Metadata } from "next";
import { Topnav } from "@/components/nav/top-nav";
import { Footer } from "@/components/nav/footer";

export const metadata: Metadata = {
  title: "재즈수프",
  description: "서울의 모든 재즈바",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={"antialiased"}>
        <Topnav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
