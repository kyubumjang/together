import "./globals.css";

import { Header, LeftSideBar } from "@/components";

import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Together Value",
  description: "함께 가치를 얻어가는 좋은 글 제공, 모임 서비스",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="w-screen h-screen">
          <Header />
          <div className="flex flex-row w-full h-[calc(100%-56px)]">
            <LeftSideBar />
            <div className="flex left-16 w-[calc(100%-64px)] h-full">
              <Providers>{children}</Providers>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
