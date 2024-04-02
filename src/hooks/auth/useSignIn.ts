import { AUTH_KEYS } from "@/constants/keyFactory";
import { signIn } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

const useSignIn = (code: string) => {
  return useQuery({
    queryKey: AUTH_KEYS.user,
    queryFn: () => signIn({ params: { code } }),
    enabled: Boolean(code),
    select: (response) => response.data.data,
  });
};

export default useSignIn;
