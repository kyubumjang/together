import { ReactNode } from "react";

interface AfterLoginLayoutProps {
  children: ReactNode;
}

const AfterLoginLayout = ({ children }: AfterLoginLayoutProps) => {
  return (
    <div>
      AFTER LOGIN LAYOUT
      {children}
    </div>
  );
};

export default AfterLoginLayout;
