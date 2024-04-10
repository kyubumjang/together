import { CreateSubscription } from "@/types/together-type/subscription";
import apiRequest from ".";

const BASE_PATH = "/subscriptions";

export const subscribeUser = ({ targetUserId }: { targetUserId: number }) =>
  apiRequest.post<{ data: CreateSubscription["Response"] }>(
    `${BASE_PATH}/${targetUserId}`,
  );

export const cancelSubscribeUser = ({
  targetUserId,
}: {
  targetUserId: number;
}) => apiRequest.delete(`${BASE_PATH}/${targetUserId}`);
