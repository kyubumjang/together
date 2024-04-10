import { IPaginationQuery } from "@/types/together-type/common";
import { YOU_KEYS } from "@/constants/keyFactory";
import { getUserPosts } from "@/api/you";
import { useQuery } from "@tanstack/react-query";

const useUserPosts = ({ page = 1, take = 10 }: IPaginationQuery) => {
  return useQuery({
    queryKey: YOU_KEYS.posts({
      page,
      take,
    }),
    queryFn: () =>
      getUserPosts({
        params: {
          page,
          take,
        },
      }),
    select: (response) => response.data,
  });
};

export default useUserPosts;
