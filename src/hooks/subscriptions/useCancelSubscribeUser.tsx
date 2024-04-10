import { useMutation, useQueryClient } from "@tanstack/react-query";

import { USER_KEYS } from "@/constants";
import { cancelSubscribeUser } from "@/api/subscription";

const useCancelSubscribeUser = (targetUserId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (targetUserId: number) => cancelSubscribeUser({ targetUserId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: USER_KEYS.lists() });
      queryClient.invalidateQueries({
        queryKey: USER_KEYS.detail({ userId: targetUserId }),
      });
    },
  });
};

export default useCancelSubscribeUser;
