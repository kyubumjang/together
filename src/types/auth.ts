import { ITokens } from "./together-type/auth/common";
import { Payload } from "./together-type/common";

export interface SignInDto {
  code: string;
}

export interface SignInRes {
  data: ITokens;
  message: string;
}

export type SignIn = Payload<undefined, SignInDto, undefined, SignInRes>;
