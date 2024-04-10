import { USER_KEYS } from "@/constants/keyFactory";
import { getUserById } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

const useUserById = (userId: number) => {
  return useQuery({
    queryKey: USER_KEYS.detail({ userId }),
    queryFn: () => getUserById({ userId }),
    enabled: Boolean(userId),
    select: (response) => response.data,
  });
};

export default useUserById;
