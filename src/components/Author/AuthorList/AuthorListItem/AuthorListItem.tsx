import Image from "next/image";
import Link from "next/link";

interface AuthorListItemProps {
  avatarUrl: string;
  nickname: string;
}

const AuthorListItem = (props: AuthorListItemProps) => {
  const { avatarUrl, nickname } = props;

  return (
    <Link href={`/${nickname}`}>
      <div className="relative cursor-pointer before:absolute before:w-full before:h-2/4 before:top-2/4 before:z-10 before:opacity-40 before:bg-gradient-to-t before:from-black before:rounded-b-xl">
        <div className="relative rounded-xl overflow-hidden w-full">
          <div className="relative w-full h-full">
            <Image src={avatarUrl} alt="nickname" width={194} height={194} />
          </div>
        </div>
        <div className="absolute left-3 bottom-2 z-10 text-white text-lg font-bold effect-text-shadow-[0_0_4px_rgba(0,0,0,0.5)]">
          {nickname}
        </div>
      </div>
    </Link>
  );
};

export default AuthorListItem;
