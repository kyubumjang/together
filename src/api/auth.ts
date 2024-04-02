import { SignIn, SignInDto } from "@/types";

import { UpdateToken } from "@/types/together-type/auth";
import apiRequest from ".";

const BASE_PATH = "/auth";

const signIn = ({ params }: { params: SignInDto }) =>
  apiRequest.get<SignIn["Response"]>(`${BASE_PATH}/github`, { params });

const updateRefreshToken = () =>
  apiRequest.patch<{ data: UpdateToken["Response"] }>(`${BASE_PATH}/refresh`);

export { signIn, updateRefreshToken };
