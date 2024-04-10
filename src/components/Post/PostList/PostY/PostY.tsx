"use client";

import { ActivityPostType, PostType } from "@/types";
import {
  IGetUserHistory,
  IGetUserScraps,
  IUserShow,
} from "@/types/together-type/user/common";
import {
  IPost,
  IPostWithWriterLogin,
  IPostWithWriterNonLogin,
} from "@/types/together-type/post/common";
import { IconButton, useToastContext } from "@/components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useDeleteScrapPost, useScrapPost } from "@/hooks/scrap";

import { BsThreeDotsVertical } from "react-icons/bs";
import { IconDropdown } from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import { PostInfo } from "../../PostInfo";
import authState from "@/recoil/auth";
import { useDeleteBlogPost } from "@/hooks/blogPost";
import { useRecoilValue } from "recoil";

interface PostProps {
  post: PostType | IPost;
  postWriter?: string;
  loginUserInfo?: IUserShow;
}

export type DropdownItemsProps = {
  text: string;
  handleClick: () => void;
};

const hasWriter = (postData: PostType | IPost): postData is PostType => {
  return (
    (postData as IPostWithWriterLogin).Writer !== undefined ||
    (postData as IPostWithWriterNonLogin).Writer !== undefined ||
    (postData as IGetUserHistory).Post?.Writer !== undefined ||
    (postData as IGetUserScraps).Post?.Writer !== undefined
  );
};

const isPostWithWriterLogin = (
  post: PostType | IPost,
): post is IPostWithWriterLogin => {
  return (post as IPostWithWriterLogin).isScraped !== undefined;
};

const isActivityPost = (
  postData: PostType | IPost,
): postData is ActivityPostType => {
  return (postData as ActivityPostType).Post !== undefined;
};

const PostY = (props: PostProps) => {
  const { post, postWriter, loginUserInfo } = props;

  const { accessToken } = useRecoilValue(authState);

  const toast = useToastContext();

  const deleteBlogPost = useDeleteBlogPost();
  const scrapPost = useScrapPost();
  const deleteScrapPost = useDeleteScrapPost();

  const postId = isActivityPost(post) ? post.postId : post.id;

  const link = isActivityPost(post) ? post.Post?.link : post.link;

  const thumbnail = isActivityPost(post)
    ? post.Post?.thumbnail
    : post.thumbnail;

  const title = isActivityPost(post) ? post.Post?.title : post.title;

  const nickname = isActivityPost(post)
    ? post.Post?.Writer.nickname
    : hasWriter(post)
      ? post.Writer.nickname
      : undefined;

  const userId = isActivityPost(post)
    ? post.Post?.Writer.id
    : hasWriter(post)
      ? post.Writer.id
      : undefined;

  const avatarUrl = isActivityPost(post)
    ? post.Post?.Writer.avatarUrl
    : hasWriter(post)
      ? post.Writer.avatarUrl
      : undefined;

  const isPossibleDelete = () => {
    if (loginUserInfo && hasWriter(post)) {
      return nickname === loginUserInfo.nickname;
    }
    if (
      loginUserInfo &&
      (post as IPost) &&
      postWriter === loginUserInfo.nickname
    ) {
      return true;
    }
  };

  const copyUrlToClipboard = async () => {
    const copyLinkUrl = link;
    try {
      await navigator.clipboard.writeText(copyLinkUrl);
      toast({ type: "check", text: "클립보드에 링크가 복사되었습니다." });
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  const loginDropdownItems: Array<DropdownItemsProps> = [
    {
      text: "링크 복사",
      handleClick: () => {
        copyUrlToClipboard();
      },
    },
    {
      text: "게시글 삭제",
      handleClick: () => {
        deleteBlogPost.mutate(postId, {
          onSuccess: () => {
            toast({ type: "check", text: "게시글이 삭제되었습니다." });
          },
        });
      },
    },
  ];

  const notMyPostDropdownItems: Array<DropdownItemsProps> = [
    {
      text: "링크 복사",
      handleClick: () => {
        copyUrlToClipboard();
      },
    },
  ];

  const nonLoginDropdownItems: Array<DropdownItemsProps> = [];

  const handleClickScrap = () => {
    if (isPostWithWriterLogin(post)) {
      if (post.isScraped) {
        deleteScrapPost.mutate(post.id, {
          onSuccess: () => {
            toast({
              type: "check",
              text: "게시글이 북마크에서 삭제되었습니다.",
            });
          },
        });
      }
      if (!post.isScraped) {
        scrapPost.mutate(post.id, {
          onSuccess: () => {
            toast({ type: "check", text: "게시글이 북마크에 저장되었습니다." });
          },
        });
      }
    }
  };

  if (isActivityPost(post)) {
    if (post.Post == null) return;
  }

  return (
    <div className="flex flex-col group/item items-start justify-start p-2 w-80 gap-2 max-[640px]:w-full max-[640px]:p-0 max-[640px]:pb-8">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image
          width="319"
          height="180"
          src={thumbnail}
          alt={title}
          className="rounded-md min-h-[180px] max-h-[180px] max-[640px]:w-[640px] max-[640px]:rounded-none"
        />
      </Link>
      <div className="flex flex-row items-center justify-center w-full h-full">
        <div className="flex items-start w-full h-25 gap-2 max-[640px]:pl-4">
          {hasWriter(post) && avatarUrl && nickname ? (
            <>
              <Link
                href={{
                  pathname: `/${nickname}`,
                  query: { userId: userId },
                }}
              >
                <Image
                  width="36"
                  height="36"
                  src={avatarUrl}
                  alt={nickname}
                  className="rounded-full min-w-9 min-h-9"
                />
              </Link>
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col gap-0.5">
                  <div className="w-full md:min-w-[220px] h-full max-h-11 text-base text-ellipsis overflow-hidden line-clamp-2">
                    {title}
                  </div>
                  <PostInfo post={post} postInfoType="y" nickname={nickname} />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col gap-0.5">
                  <div className="w-[300px] h-full max-h-11 text-md text-ellipsis overflow-hidden line-clamp-2">
                    {title}
                  </div>
                </div>
              </Link>
            </>
          )}
          {accessToken && (
            <div className="flex flex-col gap-1">
              <div className="invisible max-[640px]:visible min-w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center group-hover/item:visible hover:cursor-pointer">
                <IconDropdown
                  label={<BsThreeDotsVertical size="16px" />}
                  dropdownItems={
                    accessToken
                      ? isPossibleDelete()
                        ? loginDropdownItems
                        : notMyPostDropdownItems
                      : nonLoginDropdownItems
                  }
                />
              </div>
              <div className="invisible max-[640px]:visible min-w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center group-hover/item:visible hover:cursor-pointer">
                <IconButton
                  icon={
                    isPostWithWriterLogin(post) && post.isScraped ? (
                      <IoMdHeart size="16px" />
                    ) : (
                      <IoMdHeartEmpty size="16px" />
                    )
                  }
                  handleClick={handleClickScrap}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostY;
