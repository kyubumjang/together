"use client";

import { AuthorList } from "@/components/Author";
import { TextInput } from "flowbite-react";
import { authorListData } from "@/constants/authorListData";

const Author = () => {
  const handleAuthorName = () => {};
  // TODO: 모든 작가의 avatarUrl, nickname이 있는 api 필요
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-col w-full h-full items-start justify-start gap-2 p-4">
        <div className="flex w-full text-xl font-bold">작가검색</div>
        <TextInput
          id="author_search"
          placeholder="좋아하는 작가님을 찾아보세요"
          size={100}
          sizing="lg"
          color="transparent"
          onChange={handleAuthorName}
        />
        <AuthorList authorListData={authorListData} />
      </div>
    </div>
  );
};

export default Author;
