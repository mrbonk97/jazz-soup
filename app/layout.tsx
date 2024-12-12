import "./globals.css";
import type { Metadata } from "next";
import { Topnav } from "@/components/nav/top-nav";
import { Leftnav } from "@/components/nav/left-nav";
import { Noto_Sans_KR } from "next/font/google";
import { Footer } from "@/components/nav/footer";

export const metadata: Metadata = {
  title: "재즈수프",
  description: "서울의 모든 재즈바",
};

const font = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={font.className + " antialiased"}>
        <Topnav />
        <Leftnav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
