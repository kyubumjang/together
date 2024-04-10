import { useMutation, useQueryClient } from "@tanstack/react-query";

import { USER_KEYS } from "@/constants";
import { subscribeUser } from "@/api/subscription";

const useSubscribeUser = (targetUserId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (targetUserId: number) => subscribeUser({ targetUserId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.detail({ userId: targetUserId }),
      });
    },
  });
};

export default useSubscribeUser;
