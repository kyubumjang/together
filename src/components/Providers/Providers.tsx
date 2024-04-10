"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContextProvider } from "../ToastContextProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: false,
        },
      },
    }),
  );

  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <ToastContextProvider>{children}</ToastContextProvider>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
