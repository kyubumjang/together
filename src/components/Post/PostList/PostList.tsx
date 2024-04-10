"use client";

import { IPost } from "@/types/together-type/post/common";
import { IUserShow } from "@/types/together-type/user/common";
import { PostListType } from "@/types";
import PostX from "./PostX/PostX";
import PostY from "./PostY/PostY";

interface PostListProps {
  postType: "x" | "y";
  postData: PostListType | IPost[];
  postWriter?: string;
  loginUserInfo?: IUserShow;
  isGithubProfile?: boolean;
  isDivider?: boolean;
  height?: number;
}

const isListPaginationData = (
  postData: PostListType | IPost[],
): postData is PostListType => {
  return "list" in postData;
};

const PostList = (props: PostListProps) => {
  const {
    postType,
    postData,
    postWriter,
    loginUserInfo,
    isGithubProfile,
    isDivider,
    height,
  } = props;

  return postType === "y" ? (
    <div className="grid w-full min-[calc(100vw-60px)] max-[640px]:pr-0 max-[640px]:last:pb-14 ">
      <div
        id="contents"
        className={`grid grid-flow-row w-full grid-cols-5 max-[640px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`}
      >
        {postData && isListPaginationData(postData)
          ? postData.list.map((post, idx) => {
              return (
                <PostY
                  key={idx}
                  post={post}
                  postWriter={postWriter}
                  loginUserInfo={loginUserInfo}
                />
              );
            })
          : postData.map((post) => {
              return (
                <PostY
                  key={post.id}
                  post={post}
                  postWriter={postWriter}
                  loginUserInfo={loginUserInfo}
                />
              );
            })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full gap-2 max-[640px]:hidden">
      {postData && isListPaginationData(postData)
        ? postData.list.map((post, idx) => {
            return (
              <div className="py-2" key={idx}>
                <PostX
                  isGithubProfile={isGithubProfile}
                  post={post}
                  postWriter={postWriter}
                  loginUserInfo={loginUserInfo}
                  height={height}
                />
                {isDivider && <hr />}
              </div>
            );
          })
        : postData.map((post) => {
            return (
              <div className="py-2" key={post.id}>
                <PostX
                  isGithubProfile={isGithubProfile}
                  post={post}
                  postWriter={postWriter}
                  loginUserInfo={loginUserInfo}
                  height={height}
                />
                {isDivider && <hr />}
              </div>
            );
          })}
    </div>
  );
};

export default PostList;
