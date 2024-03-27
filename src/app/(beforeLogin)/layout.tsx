import { ReactNode } from "react";

interface BeforeLoginLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const BeforeLoginLayout = (props: BeforeLoginLayoutProps) => {
  const { children, modal } = props;

  return (
    <div className="flex w-full h-full">
      {children}
      {modal}
    </div>
  );
};

export default BeforeLoginLayout;
