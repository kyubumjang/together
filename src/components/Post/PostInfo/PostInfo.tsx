"use client";

import {
  IPost,
  IPostWithWriterLogin,
  IPostWithWriterNonLogin,
} from "@/types/together-type/post/common";

import { PostType } from "@/types";
import { useTimeDiff } from "@/utils";

//   TODO: 조회수, 시간 타입 추가
interface PostInfoProps {
  post: PostType | IPost;
  postInfoType: "x" | "y";
  nickname: string;
}

const hasViewsProperty = (
  post: PostType | IPost,
): post is IPostWithWriterLogin | IPostWithWriterNonLogin => {
  return "views" in post;
};

const PostInfo = (props: PostInfoProps) => {
  const { post, postInfoType, nickname } = props;

  const { createdAt } = post;

  const timeDiff = useTimeDiff(createdAt);

  return (
    <div>
      {postInfoType === "y" ? (
        <>
          <div className="flex">
            {/* FIXME: nested a tag */}
            <div className="text-sm text-gray-500 z-10 ">{nickname}</div>
          </div>
          <div className="flex gap-1">
            {hasViewsProperty(post) && (
              <>
                <div className="text-sm text-gray-500">
                  조회수 {post.views}회
                </div>
                <div className="text-sm text-gray-500">•</div>
              </>
            )}
            <div className="text-sm text-gray-500">{timeDiff}</div>
          </div>
        </>
      ) : (
        <div className="flex flex-row gap-2">
          <div className="text-sm text-gray-500 z-10 ">{nickname}</div>
          <div className="flex flex-row">
            {hasViewsProperty(post) && (
              <div className="text-sm text-gray-500">조회수 {post.views}회</div>
            )}
            <div className="text-sm text-gray-500 before:content-['•'] before:mx-1 ">
              {timeDiff}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
