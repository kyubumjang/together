import { Button } from "flowbite-react";
import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-4">
      <span className="font-bold text-9xl">404</span>
      <h3 className="font-bold text-3xl">Not Found</h3>
      <Link href="/">
        <Button>홈으로</Button>
      </Link>
    </div>
  );
};

export default NotFound;
