import "./globals.css";
import "./font.css";
import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        <Script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_CLIENT_ID}`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
