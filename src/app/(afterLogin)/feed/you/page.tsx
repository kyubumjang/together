"use client";

import {
  IGetUserActivity,
  IGetUserHistory,
  IGetUserScraps,
} from "@/types/together-type/user/common";
import {
  IListPagination,
  IPaginationQuery,
} from "@/types/together-type/common";
import { Loading, LoginModal } from "@/components";
import { useEffect, useState } from "react";
import {
  useLoginUserInfo,
  useUserActivity,
  useUserHistoryPosts,
  useUserPosts,
  useUserScrapPosts,
} from "@/hooks";

import { Button } from "flowbite-react";
import { IPostWithWriter } from "@/types/together-type/post/common";
import { PostList } from "@/components/Post";
import authState from "@/recoil/auth";
import { useRecoilValue } from "recoil";

const You = () => {
  const { accessToken } = useRecoilValue(authState);

  const [userActivity, setUserActivity] = useState<IGetUserActivity>();
  const [userHistory, setUserHistory] =
    useState<IListPagination<IGetUserHistory>>();
  const [userScrapPosts, setUserScrapPosts] =
    useState<IListPagination<IGetUserScraps>>();
  const [userPosts, setUserPosts] =
    useState<IListPagination<IPostWithWriter>>();

  const [userHistoryParams, setUserHistoryParams] = useState<IPaginationQuery>({
    page: 1,
    take: 10,
  });
  const [userScrapsParams, setUserScrapsParams] = useState<IPaginationQuery>({
    page: 1,
    take: 10,
  });
  const [userPostsParams, setUserPostsParams] = useState<IPaginationQuery>({
    page: 1,
    take: 10,
  });

  const { data: loginUserInfo } = useLoginUserInfo();
  const {
    data: userActivityData,
    isLoading: isUserActivityLoading,
    isSuccess,
  } = useUserActivity();
  const { data: userHistoryData, isLoading: isUserHistoryDataLoading } =
    useUserHistoryPosts(userHistoryParams);

  const { data: userScrapPostsData, isLoading: isUserScrapPostsLoading } =
    useUserScrapPosts(userScrapsParams);

  const { data: userPostsData, isLoading: isUserPostsLoading } =
    useUserPosts(userPostsParams);

  const isDataLoading =
    isUserActivityLoading ||
    isUserHistoryDataLoading ||
    isUserPostsLoading ||
    isUserScrapPostsLoading;

  const handleTakeHistoryMore = () => {
    setUserHistoryParams((prev) => {
      return {
        ...prev,
        page: 1,
        take: prev.take + 10,
      };
    });
  };
  const handleTakeScrapPostsMore = () => {
    setUserScrapsParams((prev) => {
      return {
        ...prev,
        page: 1,
        take: prev.take + 10,
      };
    });
  };
  const handleTakeMyPostsMore = () => {
    setUserPostsParams((prev) => {
      return {
        ...prev,
        page: 1,
        take: prev.take + 10,
      };
    });
  };

  useEffect(() => {
    if (userActivityData) {
      setUserActivity(userActivityData.data);
    }
  }, [isSuccess, userActivityData]);

  useEffect(() => {
    if (userHistoryData) {
      setUserHistory(userHistoryData.data);
    }
  }, [userHistoryData]);

  useEffect(() => {
    if (userScrapPostsData) {
      setUserScrapPosts(userScrapPostsData.data);
    }
  }, [userScrapPostsData]);

  useEffect(() => {
    if (userPostsData) {
      setUserPosts(userPostsData.data);
    }
  }, [userPostsData]);

  if (isDataLoading) {
    return <Loading />;
  }

  return accessToken ? (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">조회 기록</div>
          <>
            {userActivity && userHistory && userHistoryData ? (
              <PostList
                postType="y"
                postData={userHistory}
                isGithubProfile={false}
                loginUserInfo={loginUserInfo?.data}
                height={150}
              />
            ) : (
              <h3 className="font-bold text-3xl">조회 기록이 없습니다.</h3>
            )}
            {userHistoryData && userHistoryData.data.hasNext && (
              <div className="flex justify-center items-center w-full pb-4">
                <Button color="gray" pill onClick={handleTakeHistoryMore}>
                  더 불러오기
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">북마크</div>
          <>
            {userActivity && userScrapPosts && userScrapPostsData ? (
              <PostList
                postType="y"
                postData={userScrapPosts}
                isGithubProfile={false}
                loginUserInfo={loginUserInfo?.data}
                height={150}
              />
            ) : (
              <h3 className="font-bold text-3xl">북마크 목록이 없습니다.</h3>
            )}
            {userScrapPostsData && userScrapPostsData.data.hasNext && (
              <div className="flex justify-center items-center w-full pb-4">
                <Button color="gray" pill onClick={handleTakeScrapPostsMore}>
                  더 불러오기
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">내가 올린 글</div>
          <>
            {userActivity && userPosts && userPostsData ? (
              <PostList
                postType="y"
                postData={userPosts}
                isGithubProfile={false}
                loginUserInfo={loginUserInfo?.data}
                height={150}
              />
            ) : (
              <h3 className="font-bold text-3xl">내가 올린 글이 없습니다.</h3>
            )}
            {userPostsData && userPostsData.data.hasNext && (
              <div className="flex justify-center items-center w-full pb-4">
                <Button color="gray" pill onClick={handleTakeMyPostsMore}>
                  더 불러오기
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full gap-4">
      {/* TODO: 아이콘 추가 및 컴포넌트 분리 */}
      <div className="flex w-full text-xl font-bold p-2">
        좋아하는 포스팅을 읽어보세요.
      </div>
      <div className="flex w-full text-md font-bold p-2">
        저장하거나 좋아요 표시한 포스팅을 보려면 로그인하세요.
      </div>
      <div>
        <LoginModal />
      </div>
    </div>
  );
};

export default You;
