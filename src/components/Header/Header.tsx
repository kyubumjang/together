"use client";

import { Avatar, Dropdown, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { HeaderIconListSkeleton } from "../Skeleton";
import { IUserShow } from "@/types/together-type/user/common";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
// import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { LoginModal } from "../Login";
import authState from "@/recoil/auth";
import togetherValueLogo from "../../../public/togetherValueLogo.svg";
import { useLoginUserInfo } from "@/hooks";
import { useRecoilValue } from "recoil";

const Header = () => {
  const { accessToken } = useRecoilValue(authState);

  const [userInfo, setUserInfo] = useState<IUserShow>();

  const { data, isLoading } = useLoginUserInfo();

  useEffect(() => {
    if (data) {
      setUserInfo(data.data);
    }
  }, [data]);

  return (
    <header className="flex flex-row sticky top-0 w-full h-14 items-center justify-between border px-3 max-[640px]:fixed bg-white z-20">
      <div className="flex items-center justify-between min-w-[241px]">
        <div className="flex items-center justify-center w-10 h-10 max-[640px]:hidden">
          <AiOutlineMenu size="24px" />
        </div>
        <Link href={accessToken ? "/home" : "/"}>
          <Image
            src={togetherValueLogo}
            alt="togetherValueLogo"
            className="flex min-w-[200px]"
          />
        </Link>
      </div>
      <div className="max-w-md max-[640px]:hidden">
        <TextInput
          id="search"
          placeholder="검색"
          rightIcon={GoSearch}
          size={610}
        />
      </div>
      <div className="flex items-center justify-between gap-4 z-20">
        {/* TODO: 로그인 전, 로그인 후 아이콘 다르게 처리: 알림 추가 필요 로그인 전 : 로그인 버튼/로그인 후: 알림, 프로필 */}
        {isLoading ? (
          <HeaderIconListSkeleton />
        ) : accessToken && userInfo ? (
          <>
            <div className="w-10 h-8">
              <Dropdown
                label={
                  userInfo.avatarUrl ? (
                    <Avatar size="sm" rounded img={userInfo.avatarUrl} />
                  ) : (
                    <Avatar size="sm" rounded />
                  )
                }
                inline
                arrowIcon={false}
              >
                <Link
                  href={{
                    pathname: `/${userInfo.nickname}`,
                    query: { userId: userInfo.id },
                  }}
                >
                  <Dropdown.Item className="z-30">내 프로필 보기</Dropdown.Item>
                </Link>
                <Dropdown.Item className="z-30">로그아웃</Dropdown.Item>
              </Dropdown>
            </div>
            <div className="hidden max-[640px]:flex">
              <IoIosSearch size="24px" />
            </div>
          </>
        ) : (
          <Link href="/i/flow/login">
            <LoginModal />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
