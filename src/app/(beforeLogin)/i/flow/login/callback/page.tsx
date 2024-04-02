"use client";

import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { ITokens } from "@/types/together-type/auth/common";
import { Spinner } from "flowbite-react";
import authState from "@/recoil/auth";
import { isEmpty } from "lodash-es";
import { useSetRecoilState } from "recoil";
import { useSignIn } from "@/hooks/auth";

const Callback = () => {
  const params = useSearchParams();
  const code = params.get("code");
  const router = useRouter();

  const { data } = useSignIn(code!);

  const setAccessToken = useSetRecoilState(authState);

  const handleLoginSuccess = useCallback(
    (data: ITokens) => {
      setAccessToken({ accessToken: data.accessToken });
    },
    [setAccessToken],
  );

  useEffect(() => {
    if (!isEmpty(data)) {
      handleLoginSuccess(data);
      router.replace("/home");
    }
  }, [data, handleLoginSuccess, router]);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
};

export default Callback;
