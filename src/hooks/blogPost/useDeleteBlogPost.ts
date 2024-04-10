import { useMutation, useQueryClient } from "@tanstack/react-query";

import { BLOG_POST_KEYS } from "@/constants/keyFactory";
import { deleteBlogPost } from "@/api/blogPost";

const useDeleteBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: number) => deleteBlogPost({ postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BLOG_POST_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: BLOG_POST_KEYS.list({ page: 1, take: 10 }),
      });
    },
  });
};

export default useDeleteBoard;
