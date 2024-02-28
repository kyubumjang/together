import "./globals.css";

import { GoCodeOfConduct, GoHome, GoNote, GoPencil } from "react-icons/go";

import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineSubscriptions } from "react-icons/md";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import togetherValueLogo from "../../public/togetherValueLogo.svg";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Together Value",
  description: "함께 가치를 얻어가는 좋은 글 제공, 모임 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="w-screen h-screen">
          <div>
            <header className="flex flex-row w-full h-14 items-center justify-between border px-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-10 h-10">
                  <AiOutlineMenu size="24px" />
                </div>
                <Link href="/">
                  <Image src={togetherValueLogo} alt="togetherValueLogo" />
                </Link>
              </div>
              <div>search input</div>
              <div>alarm icon</div>
              <div>profile icon</div>
              <Link
                href="/login"
                className="w-24 p-4 items-center justify-center text-center border rounded  "
              >
                로그인
              </Link>
            </header>
          </div>
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-16 h-full top-14 bottom-0 left-0 box-border">
              <Link href="/">
                <div className="flex flex-col items-center justify-center pt-4 pr-0 pb-3.5 pl-0">
                  <GoHome size="24px" className="mb-1.5" />
                  <span className="text-xs font-normal">홈</span>
                </div>
              </Link>
              <Link href="/feed/subscriptions">
                <div className="flex flex-col items-center justify-center  pt-4 pr-0 pb-3.5 pl-0">
                  <MdOutlineSubscriptions size="24px" className="mb-1.5" />
                  <span className="text-xs font-normal">구독</span>
                </div>
              </Link>
              <Link href="/feed/author">
                <div className="flex flex-col items-center justify-center  pt-4 pr-0 pb-3.5 pl-0">
                  <GoPencil size="24px" className="mb-1.5" />
                  <span className="text-xs font-normal">작가</span>
                </div>
              </Link>
              <Link href="/feed/you">
                <div className="flex flex-col items-center justify-center  pt-4 pr-0 pb-3.5 pl-0">
                  <GoNote size="24px" className="mb-1.5" />
                  <span className="text-xs font-normal">나</span>
                </div>
              </Link>
              <Link href="/gathering">
                <div className="flex flex-col items-center justify-center  pt-4 pr-0 pb-3.5 pl-0">
                  <GoCodeOfConduct size="24px" className="mb-1.5" />
                  <span className="text-xs font-normal">모임</span>
                </div>
              </Link>
            </div>
            <div className="flex">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
