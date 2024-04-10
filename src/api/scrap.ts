import { CreateScrap } from "@/types/together-type/scrap";
import apiRequest from ".";

const BASE_PATH = "/scraps";

export const scrapPost = ({ postId }: { postId: number }) =>
  apiRequest.post<{ data: CreateScrap["Response"] }>(`${BASE_PATH}/${postId}`);

export const deleteScrapPost = ({ postId }: { postId: number }) =>
  apiRequest.delete(`${BASE_PATH}/${postId}`);
