"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import authState from "@/recoil/auth";
import { useRecoilValue } from "recoil";

const PostSortFilter = () => {
  const handleSortUploadPost = () => {};
  const handleSortByUploadDay = () => {};
  const handleSortByLikeCount = () => {};
  const handleSortByClickCount = () => {};

  const { accessToken } = useRecoilValue(authState);

  return (
    <div className="flex flex-row bg-white p-2 w-full align-center justify-end gap-4 pr-8 max-[640px]:pr-3 max-[640px]:mt-14">
      {/* FIXME: BUTTON GROUP 컴포넌트 사용할 것 */}
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByUploadDay}
      >
        추천순
      </Button>
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByLikeCount}
      >
        최신순
      </Button>
      <Button
        pill={true}
        size="xs"
        color="gray"
        onClick={handleSortByClickCount}
      >
        조회수순
      </Button>
      {accessToken && (
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
      )}
    </div>
  );
};

export default PostSortFilter;
