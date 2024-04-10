"use client";

import {
  IListPagination,
  IPaginationQuery,
} from "@/types/together-type/common";
import {
  IPostWithWriterLogin,
  IPostWithWriterNonLogin,
} from "@/types/together-type/post/common";
import { Loading, PostList, PostSortFilter, PostTagFilter } from "@/components";
import { useCallback, useEffect, useState } from "react";

import { Button } from "flowbite-react";
import { useBlogPosts } from "@/hooks/blogPost";
import { useLoginUserInfo } from "@/hooks";

const Home = () => {
  const [blogPostDataList, setBlogPostDataList] =
    useState<IListPagination<IPostWithWriterLogin | IPostWithWriterNonLogin>>();
  const [blogPostParams, setBlogPostParams] = useState<IPaginationQuery>({
    page: 1,
    take: 10,
  });

  const { data, isLoading, isSuccess } = useBlogPosts(blogPostParams);
  const { data: loginUserInfo } = useLoginUserInfo();

  const handleTakePostMore = () => {
    setBlogPostParams((prev) => {
      return { ...prev, take: prev.take + 10 };
    });
  };

  const handleBlogPostDataList = useCallback(() => {
    if (data && data.data) {
      const postData = data.data;
      setBlogPostDataList((prev) => {
        return {
          ...prev,
          hasNext: postData.hasNext,
          list: postData.list,
          page: postData.page,
          take: postData.take,
          totalCount: postData.totalCount,
          totalPages: postData.totalPages,
        };
      });
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      handleBlogPostDataList();
    }
  }, [handleBlogPostDataList, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full h-full">
      <PostTagFilter />
      <div className="flex flex-col w-full h-full items-start justify-start gap-2 max-[640px]:p-0">
        <PostSortFilter />
        <div className="flex flex-col w-full h-full">
          {blogPostDataList ? (
            <PostList
              postType="y"
              postData={blogPostDataList}
              isGithubProfile={false}
              loginUserInfo={loginUserInfo?.data}
            />
          ) : (
            <h3 className="font-bold text-3xl">게시글이 없습니다.</h3>
          )}
          {blogPostDataList && blogPostDataList.hasNext && (
            <div className="flex justify-center items-center w-full pb-4">
              <Button color="gray" pill onClick={handleTakePostMore}>
                더 불러오기
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
