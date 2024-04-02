import { PostList, PostSortFilter, PostTagFilter } from "@/components/Post";

import { postData } from "@/constants/postData";

const BeforeLoginPage = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start gap-2 p-2">
      <PostTagFilter />
      <PostSortFilter />
      <PostList postType="y" postData={postData} isGithubProfile={false} />
    </div>
  );
};

export default BeforeLoginPage;
