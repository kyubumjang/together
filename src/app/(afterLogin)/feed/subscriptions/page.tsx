"use client";

import { PostList } from "@/components/Post";
import { postData } from "@/constants/postData";

const Subscriptions = () => {
  // TODO: 구독한 작가의 글 조회

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
        <div className="flex w-full text-xl font-bold p-2">최신순</div>
        <PostList postType="y" postData={postData} isGithubProfile />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
        <div className="flex w-full text-xl font-bold p-2">
          구독한 작가의 글
        </div>
        <PostList postType="x" postData={postData} isGithubProfile isDivider />
      </div>
    </div>
  );
};

export default Subscriptions;
