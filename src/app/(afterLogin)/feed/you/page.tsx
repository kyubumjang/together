"use client";

import { LoginModal } from "@/components";
import { PostList } from "@/components/Post";
import authState from "@/recoil/auth";
import { postData } from "@/constants/postData";
import { useRecoilValue } from "recoil";

const You = () => {
  const { accessToken } = useRecoilValue(authState);

  return accessToken ? (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">조회 기록</div>
          <PostList
            postType="y"
            postData={postData}
            isGithubProfile={false}
            height={150}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">북마크</div>
          <PostList
            postType="y"
            postData={postData}
            isGithubProfile={false}
            height={150}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col w-full h-full items-center justify-start gap-2 p-2">
          <div className="flex w-full text-xl font-bold p-2">내가 올린 글</div>
          <PostList
            postType="y"
            postData={postData}
            isGithubProfile={false}
            height={150}
          />
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
