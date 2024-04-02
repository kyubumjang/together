import { ITokens } from "@/types/together-type/auth/common";
import { atom } from "recoil";

const authState = atom<Pick<ITokens, "accessToken">>({
  key: "authState",
  default: {
    accessToken: "",
  },
});

export default authState;
