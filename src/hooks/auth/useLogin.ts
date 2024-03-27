import { useMutation, useQueryClient } from "@tanstack/react-query";

// import { AUTH_KEYS } from "@/constants/keyFactory";
import { fetchGitHubUser } from "@/api/auth";

const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchGitHubUser,
    onSuccess: () => {
      // FIXME: 수정 필요
      queryClient.invalidateQueries({ refetchType: "active" });
    },
  });
};

export default useSignIn;
