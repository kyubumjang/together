import { useMutation, useQueryClient } from "@tanstack/react-query";

import { BLOG_POST_KEYS } from "@/constants";
import { scrapPost } from "@/api/scrap";

const useScrapPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: number) => scrapPost({ postId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BLOG_POST_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: BLOG_POST_KEYS.list({ page: 1, take: 10 }),
      });
    },
  });
};

export default useScrapPost;
