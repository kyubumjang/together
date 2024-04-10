import { IUser, IUserShow } from "@/types/together-type/user/common";

import { PostCategory } from "@/types/together-type/post/common";

const KEY_DOMAINS = {
  authUser: "authUser",
  logout: "logout",
  blogPost: "blogPost",
  user: "user",
  you: "you",
} as const;

export const AUTH_KEYS = {
  user: [KEY_DOMAINS.authUser],
  logout: [KEY_DOMAINS.logout],
} as const;

export const BLOG_POST_KEYS = {
  all: [KEY_DOMAINS.blogPost],
  lists: () => [...BLOG_POST_KEYS.all, "list"],
  list: (filters: {
    writerId?: IUser["id"];
    title?: string;
    thumbnail?: string;
    link?: string;
    description?: string;
    category?: PostCategory;
    totalCount?: number;
    page?: number;
    take?: number;
    isScraped?: boolean;
    views?: number;
    Writer?: IUserShow;
  }) => [...BLOG_POST_KEYS.all, "list", filters],
  details: () => [...BLOG_POST_KEYS.all, "detail"],
  detail: (filters: { postId: number }) => [
    ...BLOG_POST_KEYS.details(),
    filters,
  ],
};

export const USER_KEYS = {
  all: [KEY_DOMAINS.user],
  lists: () => [...USER_KEYS.all, "list"],
  details: () => [...USER_KEYS.all, "detail"],
  detail: (filters: { userId: number }) => [...USER_KEYS.details(), filters],
  loginUser: () => [...USER_KEYS.all, "login"],
};

export const YOU_KEYS = {
  all: [KEY_DOMAINS.user],
  lists: () => [...YOU_KEYS.all, "list"],
  history: (filters: {
    writerId?: IUser["id"];
    title?: string;
    thumbnail?: string;
    link?: string;
    description?: string;
    category?: PostCategory;
    totalCount?: number;
    page?: number;
    take?: number;
    isScraped?: boolean;
    views?: number;
    Writer?: IUserShow;
  }) => [...YOU_KEYS.all, "history", filters],
  scraps: (filters: {
    writerId?: IUser["id"];
    title?: string;
    thumbnail?: string;
    link?: string;
    description?: string;
    category?: PostCategory;
    totalCount?: number;
    page?: number;
    take?: number;
    isScraped?: boolean;
    views?: number;
    Writer?: IUserShow;
  }) => [...YOU_KEYS.all, "scraps", filters],
  posts: (filters: {
    writerId?: IUser["id"];
    title?: string;
    thumbnail?: string;
    link?: string;
    description?: string;
    category?: PostCategory;
    totalCount?: number;
    page?: number;
    take?: number;
    isScraped?: boolean;
    views?: number;
    Writer?: IUserShow;
  }) => [...YOU_KEYS.all, "posts", filters],
  details: () => [...YOU_KEYS.all, "detail"],
  detail: (filters: { userId: number }) => [...YOU_KEYS.details(), filters],
};
