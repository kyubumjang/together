"use client";

import { ReactNode, useEffect } from "react";

import { Header } from "../Header";
import { HeaderSkeleton } from "../Skeleton";
import { LeftSideBar } from "../LeftSideBar";
import { Loading } from "../Loading";
import { TabBar } from "../TabBar";
import authState from "@/recoil/auth";
import { baseInstance } from "@/api";
import { useSetRecoilState } from "recoil";
import { useUpdateRefreshToken } from "@/hooks/auth";

const RootLayoutWrapper = ({ children }: Readonly<{ children: ReactNode }>) => {
  const setAccessToken = useSetRecoilState(authState);
  const updateRefreshToken = useUpdateRefreshToken();
  const isIdle = updateRefreshToken.isIdle;
  const isPending = updateRefreshToken.isPending;
  const isLoading = isIdle || isPending;
  useEffect(() => {
    updateRefreshToken.mutate(undefined, {
      onSuccess: (data) => {
        const { accessToken } = data.data.data;
        setAccessToken({ accessToken: accessToken });

        baseInstance.interceptors.request.use(
          (config) => {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          },
        );
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-start items-start">
      {isLoading ? <HeaderSkeleton /> : <Header />}
      <div className="flex flex-row w-full h-[calc(100%-56px)] max-[640px]:relative">
        <LeftSideBar />
        <div className="flex left-16 w-full h-full max-[640px]:w-full max-[640px]:left-0">
          {isLoading ? <Loading /> : <>{children}</>}
        </div>
      </div>
      <TabBar />
    </div>
  );
};

export default RootLayoutWrapper;
