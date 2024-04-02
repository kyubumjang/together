"use client";

import { ReactNode, useEffect } from "react";

import { Header } from "../Header";
import { LeftSideBar } from "../LeftSideBar";
import { Loading } from "../Loading";
import authState from "@/recoil/auth";
import { useSetRecoilState } from "recoil";
import { useUpdateRefreshToken } from "@/hooks/auth";

const RootLayoutWrapper = ({ children }: Readonly<{ children: ReactNode }>) => {
  const setAccessToken = useSetRecoilState(authState);
  const updateRefreshToken = useUpdateRefreshToken();
  const isIdle = updateRefreshToken.isIdle;
  const isPending = updateRefreshToken.isPending;

  useEffect(() => {
    updateRefreshToken.mutate(undefined, {
      onSuccess: (data) => {
        const { accessToken } = data.data.data;
        setAccessToken({ accessToken: accessToken });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header isLoading={isIdle || isPending} />
      <div className="flex flex-row w-full h-[calc(100%-56px)]">
        <LeftSideBar />
        <div className="flex left-16 w-[calc(100%-64px)] h-full">
          {/* TODO: 추후 스켈레톤으로 변경 */}
          {isIdle || isPending ? <Loading /> : <>{children}</>}
        </div>
      </div>
    </>
  );
};

export default RootLayoutWrapper;
