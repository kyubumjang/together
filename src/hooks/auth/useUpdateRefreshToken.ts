import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AUTH_KEYS } from "@/constants/keyFactory";
import { updateRefreshToken } from "@/api/auth";

const useUpdateRefreshToken = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateRefreshToken,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.user });

      return response.data;
    },
  });
};

export default useUpdateRefreshToken;
