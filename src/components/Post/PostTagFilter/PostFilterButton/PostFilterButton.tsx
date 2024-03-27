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
      {filterName}
    </Button>
  );
};

export default PostFilterButton;
