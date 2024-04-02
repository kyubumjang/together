import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <>{children}</>;
};

export default HomeLayout;

// want re-render -> template
// 페이지 넘어다니는 것을 기록(매번 새로운 마운트) - 구글 아날리틱스
// not want to re-render -> layout
