import {
  GetUserActivity,
  GetUserHistory,
  GetUserPosts,
  GetUserScraps,
} from "@/types/together-type/user";

import apiRequest from ".";

const BASE_PATH = "/users";

/**
 * 나 페이지 조회 API(조회한 게시글, 스크랩 게시글, 작성 게시글)
 */
export const getUserActivity = () =>
  apiRequest.get<{ data: GetUserActivity["Response"] }>(
    `${BASE_PATH}/activity`,
  );

/**
 * 유저 조회한 게시글 리스트 페이지네이션
 */
export const getUserHistoryPosts = ({
  params,
}: {
  params: GetUserHistory["Request"]["query"];
}) =>
  apiRequest.get<{ data: GetUserHistory["Response"] }>(`${BASE_PATH}/history`, {
    params,
  });

/**
 * 유저가 스크랩 한 게시글 리스트 페이지네이션용
 */
export const getUserScrapPosts = ({
  params,
}: {
  params: GetUserScraps["Request"]["query"];
}) =>
  apiRequest.get<{ data: GetUserScraps["Response"] }>(`${BASE_PATH}/scraps`, {
    params,
  });

/**
 * 유저가 작성한 게시글 리스트 페이지네이션용
 */
export const getUserPosts = ({
  params,
}: {
  params: GetUserPosts["Request"]["query"];
}) =>
  apiRequest.get<{ data: GetUserPosts["Response"] }>(`${BASE_PATH}/posts`, {
    params,
  });
