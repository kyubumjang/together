"use client";

import { ReactNode } from "react";

interface BeforeLoginLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const BeforeLoginLayout = (props: BeforeLoginLayoutProps) => {
  const { children, modal } = props;

  return (
    <div className="flex w-full h-full sm:pl-16 max-[640px]:pl-0">
      {children}
      {modal}
    </div>
  );
};

export default BeforeLoginLayout;
