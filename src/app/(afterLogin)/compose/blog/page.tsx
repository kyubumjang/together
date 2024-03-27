"use client";

import { Badge, Button, Dropdown, TextInput } from "flowbite-react";
import { ChangeEvent, useState } from "react";

import { PostCategory } from "../../../../../together-type/post/common";

type keyOfPostCategory = keyof typeof PostCategory;

const ComposeBlog = () => {
  const [urlLink, setUrlLink] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const postCategories: Array<keyof typeof PostCategory> = [];

  for (const objKey in PostCategory) {
    if (PostCategory.hasOwnProperty(objKey)) {
      postCategories.push(objKey as keyOfPostCategory);
    }
  }

  const handleChangeUrlLink = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlLink(e.target.value);
  };

  const handleClickCompose = () => {
    // // urlLink로 변경해서 해볼 것
  };

  const handleClickTag = (postCategory: keyof typeof PostCategory) => {
    if (tagList.includes(postCategory) !== true) {
      setTagList([...tagList, postCategory]);
    }
  };

  const handleClickBadge = (deletedTag: string) => {
    const deletedTagList = tagList.filter((tag) => tag !== deletedTag);
    setTagList(deletedTagList);
  };
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-6/12 h-full items-start justify-start p-2 gap-2">
        <div className="flex w-full text-3xl">블로그 글 링크 발행 페이지</div>
        <div className="flex flex-col w-full h-full gap-2">
          <TextInput
            id="link"
            placeholder="글 링크를 입력하세요"
            size={35}
            sizing="lg"
            color="transparent"
            onChange={handleChangeUrlLink}
          />
          <div className="flex h-6 gap-2">
            {tagList &&
              tagList.map((tag) => {
                return (
                  <Badge key={tag} onClick={() => handleClickBadge(tag)}>
                    {tag}
                  </Badge>
                );
              })}
          </div>
          <div className="flex">
            <Dropdown label="태그 선택" color="white" placement="bottom-start">
              {postCategories.map((postCategory) => {
                return (
                  <Dropdown.Item
                    key={postCategory}
                    onClick={() => handleClickTag(postCategory)}
                  >
                    {postCategory}
                  </Dropdown.Item>
                );
              })}
            </Dropdown>
          </div>
        </div>
        <div className="flex w-full justify-end bottom-0">
          <Button pill={true} color="gray" onClick={handleClickCompose}>
            발행
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-6/12 h-full bg-gray-100 "></div>
    </div>
  );
};

export default ComposeBlog;
