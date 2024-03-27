"use client";

import { IListPagination } from "../../../../together-type/common";
import { IPostWithWriter } from "../../../../together-type/post/common";
import PostX from "./PostX/PostX";
import PostY from "./PostY/PostY";

interface PostListProps {
  postType: "x" | "y";
  postData: IListPagination<IPostWithWriter>;
  isGithubProfile?: boolean;
  isDivider?: boolean;
  height?: number;
}

const PostList = (props: PostListProps) => {
  const { postType, postData, isGithubProfile, isDivider, height } = props;

  // const gridItemMaxWidth = 500;
  // const gridItemMinWidth = 310;
  // const gridItemsPerRow = 3;
  // const gridPostsPerRow = 3;
  // const gridSlimItemsPerRow = 4;
  // const gridGameCardsPerRow = 5;
  // const gridItemMargin = 16;
  // const gridContentMaxWidth =
  //   gridItemsPerRow * (gridItemMaxWidth + gridItemMargin) - gridItemMargin;
  // const maxWidth = `${gridContentMaxWidth}px`;

  return postType === "y" ? (
    <div className="grid w-full min-[calc(100vw-60px)] pr-5">
      <div id="contents" className={`grid grid-flow-row grid-cols-5 w-full`}>
        {postData.list.map((post, idx) => {
          return <PostY key={idx} post={post} />;
        })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full gap-2">
      {postData.list.map((post, idx) => {
        return (
          <div className="py-2" key={idx}>
            <PostX
              isGithubProfile={isGithubProfile}
              post={post}
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
