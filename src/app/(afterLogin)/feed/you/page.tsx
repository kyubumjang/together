import { PostList } from "@/components/Post";
import { postData } from "@/constants/postData";

const You = () => {
  return (
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
  );
};

export default You;
