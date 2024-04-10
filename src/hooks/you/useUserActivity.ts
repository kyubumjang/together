import { YOU_KEYS } from "@/constants/keyFactory";
import { getUserActivity } from "@/api/you";
import { useQuery } from "@tanstack/react-query";

const useUserActivity = () => {
  return useQuery({
    queryKey: YOU_KEYS.lists(),
    queryFn: () => getUserActivity(),
    select: (response) => response.data,
  });
};

export default useUserActivity;
