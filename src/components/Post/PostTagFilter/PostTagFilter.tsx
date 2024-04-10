"use client";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { PostCategoryEntire, PostCategoryWithEntire } from "@/types/post";
import { useEffect, useRef, useState } from "react";

import { Button } from "flowbite-react";
import { PostCategory } from "@/types/together-type/post/common";
import { PostFilterButton } from "./PostFilterButton";
import { postCategoryTranslation } from "@/constants";

const PostTagFilter = () => {
  const [moveX, setMoveX] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef !== null) {
      // setBarWidth(barRef.current.offsetWidth);
    }
  }, []);

  const postCategories = [];

  for (const objKey in postCategoryTranslation) {
    if (postCategoryTranslation.hasOwnProperty(objKey)) {
      const key: keyof typeof postCategoryTranslation =
        objKey as PostCategoryWithEntire;

      postCategories.push(postCategoryTranslation[key]);
    }
  }

  const handleArrowLeft = () => {
    setMoveX((prevMoveX) => {
      return prevMoveX === 0 ? prevMoveX : prevMoveX + 1;
    });
  };
  const handleArrowRight = () => {
    setMoveX((prevMoveX) => {
      return prevMoveX < -4 ? prevMoveX : prevMoveX - 1;
    });
  };

  return (
    // TODO: 모바일 형태일 때 overflow-hidden 스크롤 반응형 처리
    <div
      className="flex flex-row sticky top-14 bg-white z-10 items-center justify-start p-2 gap-4 md:min-w-[768px] sm:min-w-full sm:w-full h-14 bg-gradient-to-r to-white max-[640px]:w-[640px] max-[640px]:max-w-[640px] max-[640px]:overflow-hidden max-[640px]:fixed"
      ref={barRef}
    >
      {/* FIXME: 수정 */}
      <div className="hidden flex-row absolute z-10 before:hidden">
        <Button pill={true} size="xs" color="gray" onClick={handleArrowLeft}>
          <MdOutlineKeyboardArrowLeft />
        </Button>
        <div className="after:w-[50px] after:bg-gradient-to-r after:from-white after:to-transparent after:after:pointer-events-none" />
      </div>
      {postCategories.map((postCategory) => {
        return (
          <PostFilterButton key={postCategory} filterName={postCategory} />
        );
      })}
      {/* FIXME: 수정 */}
      <div className="hidden flex-row absolute right-0 z-10 before:hidden">
        <Button pill={true} size="xs" color="gray" onClick={handleArrowRight}>
          <MdOutlineKeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default PostTagFilter;
