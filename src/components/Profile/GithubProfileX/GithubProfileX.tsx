import { Avatar } from "flowbite-react";
import { IUser } from "../../../../together-type/user/common";
import Link from "next/link";

interface GithubProfileXProps
  extends Pick<IUser, "avatarUrl" | "nickname" | "githubUrl"> {}

const GithubProfileX = (props: GithubProfileXProps) => {
  const { avatarUrl, githubUrl, nickname } = props;

  return (
    <div className="flex w-[206px]">
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row gap-2">
          <Avatar img={avatarUrl} rounded size="sm" />
          <div className="text-lg font-bold">{nickname}</div>
        </div>
      </Link>
    </div>
  );
};

export default GithubProfileX;
