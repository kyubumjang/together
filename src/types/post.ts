import { IGetUserHistory, IGetUserScraps } from "./together-type/user/common";
import { IListPagination, Union } from "./together-type/common";
import {
  IPostWithWriter,
  IPostWithWriterLogin,
  IPostWithWriterNonLogin,
  PostCategory,
} from "./together-type/post/common";

export const PostCategoryEntire = {
  ENTIRE: "ENTIRE",
} as const;

export type PostCategoryWithEntire =
  | PostCategory
  | Union<typeof PostCategoryEntire>;

export type PostListType =
  | IListPagination<IPostWithWriterLogin>
  | IListPagination<IPostWithWriterNonLogin>
  | IListPagination<IGetUserHistory>
  | IListPagination<IPostWithWriter>
  | IListPagination<IGetUserScraps>;

export type PostType = LoginPostType | ActivityPostType;

export type LoginPostType = IPostWithWriterLogin | IPostWithWriterNonLogin;

export type ActivityPostType = IGetUserHistory | IGetUserScraps;
