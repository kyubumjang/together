import { ReactNode } from "react";

interface AfterLoginLayoutProps {
  children: ReactNode;
}

const AfterLoginLayout = ({ children }: AfterLoginLayoutProps) => {
  return <div className="flex w-full h-full">{children}</div>;
};

export default AfterLoginLayout;
