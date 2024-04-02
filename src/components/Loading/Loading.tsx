"use client";

import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
};

export default Loading;
