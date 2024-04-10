"use client";

import { Button } from "flowbite-react";

interface PostFilterButtonProps {
  filterName: string;
}

const PostFilterButton = (props: PostFilterButtonProps) => {
  const { filterName } = props;

  const handlePostFilter = () => {};

  return (
    <Button pill={true} size="xs" color="gray" onClick={handlePostFilter}>
      <span className="whitespace-nowrap">{filterName}</span>
    </Button>
  );
};

export default PostFilterButton;
