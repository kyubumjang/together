"use client";

import {
  IPostWithWriterLogin,
  IPostWithWriterNonLogin,
} from "@/types/together-type/post/common";

import { GithubProfileX } from "@/components/Profile";
import Image from "next/image";
import Link from "next/link";
import { PostInfo } from "../../PostInfo";

interface PostXProps {
  post: IPostWithWriterLogin | IPostWithWriterNonLogin;
  isGithubProfile?: boolean;
  height?: number;
}

const PostX = (props: PostXProps) => {
  const { isGithubProfile, post, height = 230 } = props;
  const { title, thumbnail, link, description, Writer } = post;
  return (
    <div className={`flex flex-col w-full h-[${height}px] gap-2`}>
      {isGithubProfile && (
        <GithubProfileX
          avatarUrl={post.Writer.avatarUrl}
          githubUrl={post.Writer.githubUrl}
          nickname={post.Writer.nickname}
        />
      )}
      <div className="flex flex-row w-full h-full gap-3">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="w-[236px] h-[138px] rounded overflow-hidden">
            <Image src={thumbnail} alt="title" width={236} height={138} />
          </div>
        </Link>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-2xl">{title}</div>
              <PostInfo postInfoType="x" nickname={Writer.nickname} />
            </div>
            <div className="text-sm text-gray-500">{description}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostX;
