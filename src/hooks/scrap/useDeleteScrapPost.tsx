import { useMutation, useQueryClient } from "@tanstack/react-query";

import { BLOG_POST_KEYS } from "@/constants";
import { deleteScrapPost } from "@/api/scrap";

const useDeleteScrapPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId: number) => deleteScrapPost({ postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BLOG_POST_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: BLOG_POST_KEYS.list({ page: 1, take: 10 }),
      });
    },
  });
};

export default useDeleteScrapPost;
