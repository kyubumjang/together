import AuthorListItem from "./AuthorListItem/AuthorListItem";

type AuthorInfo = {
  avatarUrl: string;
  nickname: string;
};

interface AuthorListProps {
  authorListData: AuthorInfo[];
}

const AuthorList = (props: AuthorListProps) => {
  const { authorListData } = props;

  return (
    <div className="flex flex-col items-centered">
      <div className="grid w-full grid-cols-3 md:grid-col-3 gap-x-3 gap-y-4 mt-5">
        {authorListData.map((authorInfo) => (
          <AuthorListItem
            key={authorInfo.nickname}
            avatarUrl={authorInfo.avatarUrl}
            nickname={authorInfo.nickname}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
