"use client";

import { Avatar, Button, Tabs } from "flowbite-react";
import {
  IGetUserWithLogin,
  IGetUserWithNonLogin,
} from "@/types/together-type/user/common";
import { Loading, useToastContext } from "@/components";
import { useCallback, useEffect, useState } from "react";
import {
  useCancelSubscribeUser,
  useLoginUserInfo,
  useSubscribeUser,
  useUserById,
} from "@/hooks";
import { useParams, useSearchParams } from "next/navigation";

import Link from "next/link";
import { PostList } from "@/components/Post";

const isUserWithLogin = (
  userInfo: IGetUserWithLogin | IGetUserWithNonLogin,
): userInfo is IGetUserWithLogin => {
  return (userInfo as IGetUserWithLogin).isSubscribed !== undefined;
};

const User = () => {
  const [userInfo, setUserInfo] = useState<
    IGetUserWithLogin | IGetUserWithNonLogin
  >();
  const [isLoginUser, setIsLoginUser] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(0);

  const searchParams = useSearchParams();
  const userIdParams = searchParams.get("userId");
  const subscribeUser = useSubscribeUser(userInfo ? userInfo.id : 0);
  const cancelSubscribeUser = useCancelSubscribeUser(
    userInfo ? userInfo.id : 0,
  );
  const toast = useToastContext();

  const {
    data: userInfoByIdData,
    isFetching,
    isLoading,
    isPending,
  } = useUserById(userId);
  const { data: loginUserInfoData } = useLoginUserInfo();

  const { username } = useParams();
  const decodedParams = decodeURIComponent(String(username));

  const handleSubscribe = () => {
    if (userInfo && isUserWithLogin(userInfo) && !userInfo.isSubscribed) {
      subscribeUser.mutate(userInfo.id, {
        onSuccess: () => {
          toast({
            type: "check",
            text: `${userInfo.nickname}님을 구독합니다.`,
          });
        },
      });
    }
  };

  const handleCancelSubscribe = () => {
    if (userInfo && isUserWithLogin(userInfo) && userInfo.isSubscribed) {
      cancelSubscribeUser.mutate(userInfo.id, {
        onSuccess: () => {
          toast({
            type: "check",
            text: `${userInfo.nickname}님을 구독 취소합니다.`,
          });
        },
      });
    }
  };

  const isLoginUserProfile = useCallback(() => {
    if (loginUserInfoData) {
      return decodedParams === loginUserInfoData.data.nickname;
    }
  }, [decodedParams, loginUserInfoData]);

  useEffect(() => {
    if (userIdParams) {
      setUserId(Number(userIdParams));
    }
  }, [userIdParams]);

  useEffect(() => {
    if (loginUserInfoData && isLoginUserProfile()) {
      setIsLoginUser(true);
    }
  }, [isLoginUserProfile, loginUserInfoData]);

  useEffect(() => {
    if (userInfoByIdData) {
      setUserInfo(userInfoByIdData.data);
    }
  }, [userInfoByIdData]);

  if (isLoading || isPending || isFetching) return <Loading />;

  return userInfo ? (
    <div className="flex flex-col w-full h-full items-center justify-start gap-4 pt-4">
      <div className="flex flex-row w-full h-[160px] items-center justify-start px-1 gap-4">
        <div className="flex min-w-36 min-h-36">
          <Avatar img={userInfo.avatarUrl} size="xl" rounded />
        </div>
        <div className="flex flex-col w-full h-full gap-2">
          <div className="text-4xl font-bold max-[640px]:text-2xl">
            {userInfo.nickname}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-600">
              @{userInfo.nickname} ‧ 구독자{userInfo.subscriberCnt}명
            </div>
            <div className="text-sm text-gray-600">{userInfo.introduction}</div>
          </div>
          {!isLoginUserProfile() && (
            <div>
              {isUserWithLogin(userInfo) && userInfo.isSubscribed === false ? (
                <Button size="sm" color="gray" pill onClick={handleSubscribe}>
                  구독
                </Button>
              ) : (
                <Button
                  size="sm"
                  color="gray"
                  pill
                  onClick={handleCancelSubscribe}
                >
                  구독 중
                </Button>
              )}
            </div>
          )}
          <Link
            href={userInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-sm text-blue-600">{userInfo.githubUrl}</div>
          </Link>
          {/* {isLoginUserProfile() && (
            <div>
              <Button size="sm" color="gray" pill>
                게시글 관리
              </Button>
            </div>
          )} */}
        </div>
      </div>
      <div className="flex items-start justify-start w-full h-full pt-4">
        <Tabs style="underline">
          <Tabs.Item active title="게시글 리스트">
            {userInfo.posts ? (
              <>
                <PostList
                  postType="x"
                  postData={userInfo.posts}
                  postWriter={userInfo.nickname}
                  loginUserInfo={loginUserInfoData?.data}
                  height={150}
                  isDivider
                />
                <div className="max-[640px]:visible sm:invisible">
                  <PostList
                    postType="y"
                    postData={userInfo.posts}
                    loginUserInfo={loginUserInfoData?.data}
                    height={150}
                    isDivider
                  />
                </div>
              </>
            ) : (
              <div className="font-bold text-3xl">게시글이 없습니다.</div>
            )}
          </Tabs.Item>
          {/* TODO: 추후 처리 */}
          {/* <Tabs.Item title="작가의 말">오늘도 화이팅입니다!</Tabs.Item>
          <Tabs.Item title="커뮤니티">글 없음</Tabs.Item> */}
        </Tabs>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full justify-center items-center gap-4">
      <span className="font-bold text-9xl">404</span>
      <h3 className="font-bold text-3xl">유저 정보가 없습니다.</h3>
      <Link href="/">
        <Button>홈으로</Button>
      </Link>
    </div>
  );
};

export default User;
