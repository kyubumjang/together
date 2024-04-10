import { PostCategoryWithEntire } from "@/types";

const postCategoryTranslation: { [key in PostCategoryWithEntire]: string } = {
  ENTIRE: "전체",
  COMMON_DEV: "일반 개발",
  WEB_DEV: "웹 개발",
  JAVASCRIPT: "Javascript",
  REACT: "React",
  VUEJS: "Vue.js",
  ANGULAR: "Angular",
  NODEJS: "Node.js",
  JAVA: "Java",
  PYTHON: "Python",
  PHP: "PHP",
  INFRA_STRUCTURE: "Infra Structure",
  DATABASE: "Database",
  ANDROID: "Android",
  IOS: "Ios",
  GIT: "Git",
  AI: "인공지능",
};

export { postCategoryTranslation };
