"use client";

import { LoginModal } from "@/components";
import { PostList } from "@/components/Post";
import authState from "@/recoil/auth";
import { postData } from "@/constants/postData";
import { useLoginUserInfo } from "@/hooks";
import { useRecoilValue } from "recoil";

const Subscriptions = () => {
  // TODO: 구독한 작가의 글 조회
  const { accessToken } = useRecoilValue(authState);
  const { data: loginUserInfo } = useLoginUserInfo();

  return accessToken ? (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2 max-[640px]:p-0">
        <div className="flex w-full text-xl font-bold p-2">최신순</div>
        <PostList
          postType="y"
          postData={postData}
          isGithubProfile
          loginUserInfo={loginUserInfo?.data}
        />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
        <div className="flex w-full text-xl font-bold p-2">
          구독한 작가의 글
        </div>
        <PostList
          postType="x"
          postData={postData}
          loginUserInfo={loginUserInfo?.data}
          isGithubProfile
          isDivider
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full h-full gap-4">
      {/* TODO: 아이콘 추가 및 컴포넌트 분리 */}
      <div className="flex w-full text-xl font-bold p-2">
        새로운 포스트를 놓치지 마세요.
      </div>
      <div className="flex w-full text-md font-bold p-2">
        구독과 구독 채널의 포스팅을 확인하려면 로그인해주세요.
      </div>
      <div>
        <LoginModal />
      </div>
    </div>
  );
};

export default Subscriptions;
