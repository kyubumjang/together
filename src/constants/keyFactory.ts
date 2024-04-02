const KEY_DOMAINS = {
  authUser: "authUser",
  logout: "logout",
} as const;

export const AUTH_KEYS = {
  user: [KEY_DOMAINS.authUser],
  logout: [KEY_DOMAINS.logout],
} as const;
