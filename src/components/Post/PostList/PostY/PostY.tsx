"use client";

import { IPostWithWriter } from "@/types/together-type/post/common";
import Image from "next/image";
import Link from "next/link";
import { PostInfo } from "../../PostInfo";

interface PostProps {
  post: IPostWithWriter;
}

const PostY = (props: PostProps) => {
  const { post } = props;

  return (
    <div className="flex flex-col items-start justify-start p-2 w-80 min-w-80 gap-2">
      <Link href={post.link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center w-80 h-44 rounded-md overflow-hidden">
          <Image
            width="319"
            height="180"
            src={post.thumbnail}
            alt={post.title}
          />
        </div>
      </Link>
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-start w-72 h-25 gap-4">
          {/* TODO: 깃허브 링크로 보낼지 우리 채널로 보낼지 결정 */}
          <Link
            href={post.Writer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" w-9 rounded-full overflow-hidden">
              <Image
                width="36"
                height="36"
                src={post.Writer.avatarUrl}
                alt={post.Writer.nickname}
              />
            </div>
          </Link>
          <Link href={post.link} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col gap-0.5">
              <div className="w-64 h-full max-h-11 text-base text-ellipsis overflow-hidden line-clamp-2">
                {post.title}
              </div>
              <PostInfo postInfoType="y" nickname={post.Writer.nickname} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostY;
