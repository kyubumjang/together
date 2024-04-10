"use client";

import { ReactNode } from "react";

interface AfterLoginLayoutProps {
  children: ReactNode;
}

const AfterLoginLayout = ({ children }: AfterLoginLayoutProps) => {
  return (
    <div className="flex w-full h-full sm:pl-16 max-[640px]:pt-14 max-[640px]:pl-0">
      {children}
    </div>
  );
};

export default AfterLoginLayout;
