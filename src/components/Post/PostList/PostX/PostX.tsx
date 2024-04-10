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
import { IconButton, IconDropdown, useToastContext } from "@/components";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useDeleteBlogPost, useDeleteScrapPost, useScrapPost } from "@/hooks";

import { BsThreeDotsVertical } from "react-icons/bs";
import { DropdownItemsProps } from "../PostY/PostY";
import { GithubProfileX } from "@/components/Profile";
import Image from "next/image";
import Link from "next/link";
import { PostInfo } from "../../PostInfo";
import authState from "@/recoil/auth";
import { useRecoilValue } from "recoil";

interface PostXProps {
  post: PostType | IPost;
  postWriter?: string;
  isGithubProfile?: boolean;
  height?: number;
  loginUserInfo?: IUserShow;
}

const isPostWithWriterLogin = (
  post: PostType | IPost,
): post is IPostWithWriterLogin => {
  return (post as IPostWithWriterLogin).isScraped !== undefined;
};

const hasWriter = (postData: PostType | IPost): postData is PostType => {
  return (
    (postData as IPostWithWriterLogin).Writer !== undefined ||
    (postData as IPostWithWriterNonLogin).Writer !== undefined ||
    (postData as IGetUserHistory).Post?.Writer !== undefined ||
    (postData as IGetUserScraps).Post?.Writer !== undefined
  );
};

const isActivityPost = (
  postData: PostType | IPost,
): postData is ActivityPostType => {
  return (postData as ActivityPostType).Post !== undefined;
};

const PostX = (props: PostXProps) => {
  const {
    isGithubProfile,
    post,
    postWriter,
    height = 230,
    loginUserInfo,
  } = props;

  const postId = isActivityPost(post) ? post.postId : post.id;

  const link = isActivityPost(post) ? post.Post?.link : post.link;

  const thumbnail = isActivityPost(post)
    ? post.Post?.thumbnail
    : post.thumbnail;

  const title = isActivityPost(post) ? post.Post?.title : post.title;

  const description = isActivityPost(post)
    ? post.Post?.description
    : post.description;

  const nickname = isActivityPost(post)
    ? post.Post?.Writer.nickname
    : hasWriter(post)
      ? post.Writer.nickname
      : undefined;

  const avatarUrl = isActivityPost(post)
    ? post.Post?.Writer.avatarUrl
    : hasWriter(post)
      ? post.Writer.avatarUrl
      : undefined;

  const githubUrl = isActivityPost(post)
    ? post.Post?.Writer.githubUrl
    : hasWriter(post)
      ? post.Writer.githubUrl
      : undefined;

  const { accessToken } = useRecoilValue(authState);

  const deleteBlogPost = useDeleteBlogPost();
  const scrapPost = useScrapPost();
  const deleteScrapPost = useDeleteScrapPost();

  const toast = useToastContext();

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

  const isOverflowDescription = () => {
    if (description.length > 100) {
      return true;
    }
  };

  return (
    <div className={`flex flex-col w-full h-[${height}px] gap-2 group/item`}>
      {isGithubProfile &&
        hasWriter(post) &&
        avatarUrl &&
        githubUrl &&
        nickname && (
          <GithubProfileX
            avatarUrl={avatarUrl}
            githubUrl={githubUrl}
            nickname={nickname}
          />
        )}
      <div className="flex flex-row w-full h-full gap-3">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="w-[236px] h-[138px] rounded overflow-hidden">
            <Image src={thumbnail} alt="title" width={236} height={138} />
          </div>
        </Link>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-xl">{title}</div>
              {hasWriter(post) && nickname && (
                <PostInfo post={post} postInfoType="x" nickname={nickname} />
              )}
            </div>
            <div className="w-full text-sm text-gray-500">
              {isOverflowDescription()
                ? `${description.slice(0, 100)}...`
                : description}
            </div>
          </div>
        </Link>
        {accessToken && (
          <div className="flex flex-col gap-1">
            <div className="invisible min-w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center group-hover/item:visible hover:cursor-pointer">
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
            <div className="invisible min-w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center group-hover/item:visible hover:cursor-pointer">
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
  );
};

export default PostX;
