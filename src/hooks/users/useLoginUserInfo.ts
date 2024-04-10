import { USER_KEYS } from "@/constants/keyFactory";
import { getLoginUserInfo } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

const useLoginUserInfo = () => {
  return useQuery({
    // FIXME: 확인 필요
    queryKey: USER_KEYS.loginUser(),
    queryFn: () => getLoginUserInfo(),
    select: (response) => response.data,
  });
};

export default useLoginUserInfo;
