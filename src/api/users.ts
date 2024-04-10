import { GetUser, GetUserInfo } from "@/types/together-type/user";

import apiRequest from ".";

const BASE_PATH = "/users";

/**
 * 유저 마이페이지 조회
 */
export const getUserById = ({ userId }: { userId: number }) =>
  apiRequest.get<{ data: GetUser["Response"] }>(`${BASE_PATH}/${userId}`);

/**
 * 로그인 유저 정보 조회
 */
export const getLoginUserInfo = () =>
  apiRequest.get<{ data: GetUserInfo["Response"] }>(`${BASE_PATH}/info`);
