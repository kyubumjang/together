"use client";

import { Badge, Button, Dropdown, TextInput } from "flowbite-react";
import { ChangeEvent, useState } from "react";

import { PostCategory } from "@/types/together-type/post/common";
import { isEmpty } from "lodash-es";
import { useCreateBlogPost } from "@/hooks/blogPost";
import { useRouter } from "next/navigation";
import { useToastContext } from "@/components";

type keyOfPostCategory = keyof typeof PostCategory;

const ComposeBlog = () => {
  const [urlLink, setUrlLink] = useState("");
  // TODO: IPost[category]: PostCategory[]로 수정 필요
  const [tagList, setTagList] = useState<PostCategory[]>([]);
  const createBoard = useCreateBlogPost();

  const postCategories: Array<keyof typeof PostCategory> = [];

  const router = useRouter();
  const toast = useToastContext();

  for (const objKey in PostCategory) {
    if (PostCategory.hasOwnProperty(objKey)) {
      postCategories.push(objKey as keyOfPostCategory);
    }
  }

  const handleChangeUrlLink = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlLink(e.target.value);
  };

  const handleClickCompose = () => {
    // urlLink로 변경해서 해볼 것
    if (!isEmpty(urlLink) && !isEmpty(tagList)) {
      createBoard.mutate(
        {
          link: urlLink,
          category: tagList[0],
        },
        {
          onSuccess: () => {
            toast({
              type: "check",
              text: "포스트가 성공적으로 발행되었습니다.",
            }),
              router.replace("/home");
          },
          onError: (err) => {
            if (err) {
              console.log("포스트 발행 실패", err);
            }
          },
        },
      );
    }
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
      <div className="flex flex-col w-full h-full items-start justify-start p-2 gap-2">
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
      {/* <div className="flex flex-col w-6/12 h-full bg-gray-100 "></div> */}
    </div>
  );
};

export default ComposeBlog;
