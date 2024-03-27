"use client";

//   TODO: 조회수, 시간 타입 추가
interface PostInfoProps {
  postInfoType: "x" | "y";
  nickname: string;
}

const PostInfo = (props: PostInfoProps) => {
  const { postInfoType, nickname } = props;

  return (
    <div>
      {postInfoType === "y" ? (
        <>
          <div className="flex">
            {/* FIXME: nested a tag */}
            <div className="text-sm text-gray-500 z-10 ">{nickname}</div>
          </div>
          <div className="flex">
            <div className="text-sm text-gray-500">조회수 0만회</div>
            <div className="text-sm text-gray-500 before:content-['•'] before:mx-1 ">
              3주 전
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-row gap-2">
          <div className="text-sm text-gray-500 z-10 ">{nickname}</div>
          <div className="flex flex-row">
            <div className="text-sm text-gray-500">조회수 0만회</div>
            <div className="text-sm text-gray-500 before:content-['•'] before:mx-1 ">
              3주 전
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
