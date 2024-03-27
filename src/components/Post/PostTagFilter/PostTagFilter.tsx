"use client";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";

import { Button } from "flowbite-react";
import { PostCategory } from "../../../../together-type/post/common";
import { PostFilterButton } from "./PostFilterButton";

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

  for (const objKey in PostCategory) {
    if (PostCategory.hasOwnProperty(objKey)) {
      postCategories.push(objKey);
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
    <div
      className="flex flex-row items-center justify-start gap-4 w-full h-14 overflow-hidden bg-gradient-to-r to-white"
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
