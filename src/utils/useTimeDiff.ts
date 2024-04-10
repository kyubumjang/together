import { useEffect, useState } from "react";

export const useTimeDiff = (createdAt: Date) => {
  const [timeDiffWithTranslation, setTimeDiffWithTranslation] =
    useState<string>("");

  const createdAtDate = new Date(createdAt);
  const today = new Date();
  const timeDiff = today.getTime() - createdAtDate.getTime();
  const yearDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12));
  const monthDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const minuteDiff = Math.floor(timeDiff / (1000 * 60));
  const secondDiff = Math.floor(timeDiff / 1000);

  useEffect(() => {
    if (yearDiff >= 1) {
      setTimeDiffWithTranslation(`${yearDiff}년 전`);
      return;
    }
    if (yearDiff < 1 && monthDiff >= 1) {
      setTimeDiffWithTranslation(`${monthDiff}달 전`);
      return;
    }
    if (monthDiff < 1 && dayDiff >= 1) {
      setTimeDiffWithTranslation(`${dayDiff}일 전`);
      return;
    }
    if (dayDiff < 1 && hourDiff >= 1) {
      setTimeDiffWithTranslation(`${hourDiff}시간 전`);
      return;
    }
    if (hourDiff < 1 && minuteDiff >= 1) {
      setTimeDiffWithTranslation(`${minuteDiff}분 전`);
      return;
    }
    if (minuteDiff < 1 && secondDiff >= 1) {
      setTimeDiffWithTranslation(`${secondDiff}초 전`);
      return;
    }
  }, [dayDiff, hourDiff, minuteDiff, monthDiff, secondDiff, yearDiff]);

  return timeDiffWithTranslation;
};
