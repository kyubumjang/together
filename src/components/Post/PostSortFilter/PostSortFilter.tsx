"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

const PostSortFilter = () => {
  const handleSortUploadPost = () => {};
  const handleSortByUploadDay = () => {};
  const handleSortByLikeCount = () => {};
  const handleSortByClickCount = () => {};

  return (
    <div className="flex flex-row w-full align-center justify-end gap-4 pr-8">
      <Link href="/compose/blog">
        <Button
          pill={false}
          size="xs"
          color="dark"
          onClick={handleSortUploadPost}
        >
          글 올리기
        </Button>
      </Link>
      {/* FIXME: BUTTON GROUP 컴포넌트 사용할 것 */}
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByUploadDay}
      >
        최신순
      </Button>
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByLikeCount}
      >
        추천순
      </Button>
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByClickCount}
      >
        조회수순
      </Button>
    </div>
  );
};

export default PostSortFilter;
