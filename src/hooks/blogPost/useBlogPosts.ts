import { BLOG_POST_KEYS } from "@/constants/keyFactory";
import { IPaginationQuery } from "@/types/together-type/common";
import { PostOrderBy } from "@/types/together-type/post/dto/getPosts";
import { getBlogPosts } from "@/api/blogPost";
import { useQuery } from "@tanstack/react-query";

const useBlogPosts = ({ page = 1, take = 10 }: IPaginationQuery) => {
  return useQuery({
    queryKey: BLOG_POST_KEYS.list({
      page,
      take,
    }),
    queryFn: () =>
      getBlogPosts({
        params: {
          page,
          take,
          orederBy: PostOrderBy.LATEST,
          category: "ENTIRE",
        },
      }),
    select: (response) => response.data,
  });
};

export default useBlogPosts;
