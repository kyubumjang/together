import { BLOG_POST_KEYS } from "@/constants/keyFactory";
import { getBlogPost } from "@/api/blogPost";
import { useQuery } from "@tanstack/react-query";

const useBlogPost = (postId: number, isClicked: boolean) => {
  return useQuery({
    queryKey: BLOG_POST_KEYS.detail({ postId }),
    queryFn: () => getBlogPost({ postId }),
    enabled: Boolean(postId) && Boolean(isClicked),
    select: (response) => response.data,
  });
};

export default useBlogPost;
