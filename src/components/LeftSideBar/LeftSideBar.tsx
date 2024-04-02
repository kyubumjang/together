"use client";

import { GoHome, GoNote, GoPencil } from "react-icons/go";

import Link from "next/link";
import { MdOutlineSubscriptions } from "react-icons/md";
import authState from "@/recoil/auth";
import { useRecoilValue } from "recoil";

const LeftSideBar = () => {
  const { accessToken } = useRecoilValue(authState);

  return (
    <div className="flex flex-col w-16 h-full min-w-16 top-14 bottom-0 left-0 box-border">
      {/* TODO: 컴포넌트로 분리: icon, 글자 */}
      {/* TODO: 각 네비게이션일 때 다른 icon으로 조건부 렌더링 처리 */}
      <Link href={accessToken ? "/home" : `/`}>
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
      {/* TODO: 추후 모임 추가 */}
      {/* <Link href="/gathering">
        <div className="flex flex-col items-center justify-center  pt-4 pr-0 pb-3.5 pl-0">
          <GoCodeOfConduct size="24px" className="mb-1.5" />
          <span className="text-xs font-normal">모임</span>
        </div>
      </Link>   */}
    </div>
  );
};

export default LeftSideBar;
