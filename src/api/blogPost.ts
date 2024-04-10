import { CreatePost, GetPost, GetPosts } from "@/types/together-type/post";

import apiRequest from ".";

const BASE_PATH = "/posts";

export const createBlogPost = ({
  payload,
}: {
  payload: CreatePost["Request"]["body"];
}) =>
  apiRequest.post<{ data: CreatePost["Response"] }>(`${BASE_PATH}`, payload);

export const getBlogPosts = ({
  params,
}: {
  params: GetPosts["Request"]["query"];
}) =>
  apiRequest.get<{ data: GetPosts["Response"] }>(`${BASE_PATH}`, {
    params,
  });

export const getBlogPost = ({ postId }: { postId: number }) =>
  apiRequest.get<{ data: GetPost["Response"] }>(`${BASE_PATH}/${postId}`);

//   TODO: patch는 추후 작업 예정

export const deleteBlogPost = ({ postId }: { postId: number }) =>
  apiRequest.delete(`${BASE_PATH}/${postId}`);
