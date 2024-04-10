import { useMutation, useQueryClient } from "@tanstack/react-query";

import { BLOG_POST_KEYS } from "@/constants/keyFactory";
import { CreatePost } from "@/types/together-type/post";
import { createBlogPost } from "@/api/blogPost";

const useCreateBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreatePost["Request"]["body"]) =>
      createBlogPost({ payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BLOG_POST_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: BLOG_POST_KEYS.list({ page: 1, take: 10 }),
      });
    },
  });
};

export default useCreateBlogPost;
