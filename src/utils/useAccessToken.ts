import authState from "@/recoil/auth";
import { useRecoilState } from "recoil";

export function useAccessToken() {
  const [accessToken] = useRecoilState(authState);

  return { accessToken };
}
