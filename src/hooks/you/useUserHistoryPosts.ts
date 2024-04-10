import { IPaginationQuery } from "@/types/together-type/common";
import { YOU_KEYS } from "@/constants/keyFactory";
import { getUserHistoryPosts } from "@/api/you";
import { useQuery } from "@tanstack/react-query";

const useUserHistoryPosts = ({ page = 1, take = 10 }: IPaginationQuery) => {
  return useQuery({
    queryKey: YOU_KEYS.history({
      page,
      take,
    }),
    queryFn: () =>
      getUserHistoryPosts({
        params: {
          page,
          take,
        },
      }),
    select: (response) => response.data,
  });
};

export default useUserHistoryPosts;
