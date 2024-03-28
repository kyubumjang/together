"use client";

import { Avatar, Button, Tabs } from "flowbite-react";

import { IUser } from "@/types/together-type/user/common";
import Image from "next/image";
import Link from "next/link";
import { PostList } from "@/components/Post";
import { postData } from "@/constants/postData";
import { useState } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    githubId: 0,
    id: 0,
    createdAt: new Date(),
    deletedAt: new Date(),
    updatedAt: new Date(),
    avatarUrl: "https://avatars.githubusercontent.com/u/33307948?v=4",
    githubUrl: "https://github.com/kyubumjang",
    nickname: "kyubumjang",
    introduction: "I want to live like a tree.",
    refreshToken: "",
  });

  const subscriber = 0;

  const backgroundImg =
    "https://images.unsplash.com/photo-1633265486501-0cf524a07213?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col w-full h-full items-center justify-start gap-4">
      {backgroundImg && (
        <div className="flex w-full h-[206px] items-center justify-center overflow-hidden rounded">
          <Image
            src={backgroundImg}
            alt="bgImg"
            width={1284}
            height={206}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="flex flex-row w-full h-[160px] items-center justify-start px-[127px] gap-4">
        <div className="flex min-w-36 min-h-36">
          <Avatar img={userInfo.avatarUrl} size="xl" rounded />
        </div>
        <div className="flex flex-col w-full h-full gap-2">
          <div className="text-4xl font-bold">{userInfo.nickname}</div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-600">
              @{userInfo.nickname} ‧ 구독자{subscriber}명
            </div>
            <div className="text-sm text-gray-600">{userInfo.introduction}</div>
          </div>
          {/* TODO: 조건부처리 */}
          <div>
            <Button size="sm" color="gray" pill>
              구독
            </Button>
          </div>
          <Link
            href={userInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-sm text-blue-600">{userInfo.githubUrl}</div>
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-start w-full h-full px-[127px] pt-4">
        <Tabs>
          <Tabs.Item active title="게시글 리스트">
            <PostList
              postType="x"
              postData={postData}
              isGithubProfile={false}
            />
          </Tabs.Item>
          <Tabs.Item title="작가의 말">오늘도 화이팅입니다!</Tabs.Item>
          <Tabs.Item title="커뮤니티">글 없음</Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default User;
