import { PostList, PostSortFilter, PostTagFilter } from "@/components";

import { postData } from "@/constants/postData";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start gap-2 p-2">
      <PostTagFilter />
      <PostSortFilter />
      <PostList postType="y" postData={postData} isGithubProfile={false} />
    </div>
  );
};

export default Home;
