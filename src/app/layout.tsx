import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import { RootLayoutWrapper } from "@/components";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Together Value",
  description: "함께 가치를 얻어가는 좋은 글 제공, 모임 서비스",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="w-screen h-screen">
          <Providers>
            <RootLayoutWrapper>{children}</RootLayoutWrapper>
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
