import { IListPagination } from "../../together-type/common";
import { IPostWithWriter } from "../../together-type/post/common";

export const postData: IListPagination<IPostWithWriter> = {
  totalCount: 6,
  list: [
    {
      title: "불가능을 가능으로, 상상을 현실로 블로그 운영방침",
      thumbnail:
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@jkb2221/%EB%B6%88%EA%B0%80%EB%8A%A5%EC%9D%84-%EA%B0%80%EB%8A%A5%EC%9C%BC%EB%A1%9C-%EC%83%81%EC%83%81%EC%9D%84-%ED%98%84%EC%8B%A4%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%9A%B4%EC%98%81%EB%B0%A9%EC%B9%A8",
      description:
        "글의 주제는 프런트엔드, 백엔드 개발과 관련된 전문성, 의사소통, 성장을 중심으로 작성합니다. 실제로 궁금하고 관심을 가지고 있는 부분에 대해 작성합니다.",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/33307948?v=4",
        githubUrl: "https://github.com/kyubumjang",
        nickname: "kyubumjang",
        introduction: "I want to live like a tree.",
      },
    },
    {
      title: "Github Action 시, Submodule 접근 문제",
      thumbnail:
        "https://images.unsplash.com/photo-1633265486501-0cf524a07213?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@onejaejae/Github-Action-%EC%8B%9C-Submodule-%EC%A0%91%EA%B7%BC-%EB%AC%B8%EC%A0%9C",
      description:
        "최근 프로젝트 진행하면서 프론트, 백엔드에서 공통적으로 쓰이는 타입을 어떻게 관리할 지 고민하였습니다. 고민 끝에 저희는 Submodule을 사용해 공통 타입을 관리하기로 결정하였습니다.",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/33307948?v=4",
        githubUrl: "https://github.com/kyubumjang",
        nickname: "kyubumjang",
        introduction: "I want to live like a tree.",
      },
    },
    {
      title:
        "CICD With Github Actions + Docker-compose + Elastic Beanstalk 구성 시 삽질했던 부분",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1709311439560-849f769e9c1c?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@onejaejae/CICD-With-Github-Actions-Docker-compose-Elastic-Beanstalk-%EA%B5%AC%EC%84%B1-%EC%8B%9C-%EC%82%BD%EC%A7%88%ED%96%88%EB%8D%98-%EB%B6%80%EB%B6%84",
      description:
        "오랜시간 삽질했던 부분, 같은 실수 반복하지 않기 위해 적습니다.",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/62149784?v=4",
        githubUrl: "https://github.com/onejaejae",
        nickname: "onejaejae",
        introduction: "💻",
      },
    },
    {
      title: "Docker 개념 정리",
      thumbnail:
        "https://images.unsplash.com/photo-1710764275022-ede939a1f5e2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@onejaejae/Docker-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC",
      description:
        "✔ 어떠한 프로그램을 다운 받는 과정을 굉장히 간단하게 만들기 위해서",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/62149784?v=4",
        githubUrl: "https://github.com/onejaejae",
        nickname: "onejaejae",
        introduction: "💻",
      },
    },
    {
      title: "Redis로 분산 락을 구현해 동시성 이슈를 해결 및 한계점",
      thumbnail:
        "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@onejaejae/Redis%EB%A1%9C-%EB%B6%84%EC%82%B0-%EB%9D%BD%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%B4-%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EB%A5%BC-%ED%95%B4%EA%B2%B0-%EB%B0%8F-%ED%95%9C%EA%B3%84%EC%A0%90",
      description:
        "user별로 특정 시간동안 특정 횟수를 초과한 경우 해당 유저의 요청을 제한하는 rate limit 역할을 하는 서버를 개발해야했습니다.",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/62149784?v=4",
        githubUrl: "https://github.com/onejaejae",
        nickname: "onejaejae",
        introduction: "💻",
      },
    },
    {
      title: "why sharding is difficult in rdbms",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1710294629873-9bf4ddb53e7c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://velog.io/@jkb2221/%EB%B6%88%EA%B0%80%EB%8A%A5%EC%9D%84-%EA%B0%80%EB%8A%A5%EC%9C%BC%EB%A1%9C-%EC%83%81%EC%83%81%EC%9D%84-%ED%98%84%EC%8B%A4%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%9A%B4%EC%98%81%EB%B0%A9%EC%B9%A8",
      description: "RDBMS의 한계와 어려움",
      category: "COMMON_DEV",
      Writer: {
        avatarUrl: "https://avatars.githubusercontent.com/u/62149784?v=4",
        githubUrl: "https://github.com/onejaejae",
        nickname: "onejaejae",
        introduction: "💻",
      },
    },
  ],
  page: 1,
  take: 1,
  totalPages: 1,
  hasNext: false,
};
