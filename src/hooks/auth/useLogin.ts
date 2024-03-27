import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchGitHubUser } from "@/api/auth";

// import { AUTH_KEYS } from "@/constants/keyFactory";

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
