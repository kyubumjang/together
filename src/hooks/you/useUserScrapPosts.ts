import { IPaginationQuery } from "@/types/together-type/common";
import { YOU_KEYS } from "@/constants/keyFactory";
import { getUserScrapPosts } from "@/api/you";
import { useQuery } from "@tanstack/react-query";

const useUserScrapPosts = ({ page = 1, take = 10 }: IPaginationQuery) => {
  return useQuery({
    queryKey: YOU_KEYS.scraps({
      page,
      take,
    }),
    queryFn: () =>
      getUserScrapPosts({
        params: {
          page,
          take,
        },
      }),
    select: (response) => response.data,
  });
};

export default useUserScrapPosts;
