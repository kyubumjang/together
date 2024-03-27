"use client";

import { Avatar, Button, TextInput } from "flowbite-react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import { LoginModal } from "../Login";
import togetherValueLogo from "../../../public/togetherValueLogo.svg";

const Header = () => {
  // TODO: 현재 상태가 로그인인지 아닌지 판단하는 상태 처리 필요
  // TODO: 현재 로그인한 사람의 프로필 닉네임
  const avatarUrl = "https://avatars.githubusercontent.com/u/33307948?v=4";
  const nickname = "kyubumjang";

  return (
    <header className="flex flex-row w-full h-14 items-center justify-between border px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-10 h-10">
          <AiOutlineMenu size="24px" />
        </div>
        <Link href="/">
          <Image src={togetherValueLogo} alt="togetherValueLogo" />
        </Link>
      </div>
      <div className="max-w-md">
        <TextInput
          id="search"
          placeholder="검색"
          rightIcon={GoSearch}
          size={610}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        {/* TODO: 로그인 전, 로그인 후 아이콘 다르게 처리, 로그인 전 : 메뉴 아이콘, 로그인 버튼/ 로그인 후: 알림, 프로필 */}
        <Button size="xs" color="gray" pill>
          <IoIosNotificationsOutline size="24px" />
        </Button>
        <Link href={`/${nickname}`}>
          {avatarUrl ? (
            <div className="w-10 h-8">
              <Avatar size="sm" rounded img={avatarUrl} />
            </div>
          ) : (
            <div className="w-10 h-8">
              <Avatar size="sm" rounded />
            </div>
          )}
        </Link>
        <Button size="xs" color="gray" pill>
          <BsThreeDotsVertical size="24px" />
        </Button>
        <Link href="/i/flow/login">
          <LoginModal />
        </Link>
      </div>
    </header>
  );
};

export default Header;
