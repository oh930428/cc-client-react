import styled from "styled-components";

import { Footer, Navigation, Padding } from "components";
import {
  HeaderSection,
  CampSection,
  CommunitySection,
  HomeBanner,
} from "./components";

import { ICamp, ICommunity } from "types/type";
import { mixin } from "styles";

const dumyCamp: ICamp[] = [
  {
    id: 0,
    campName: "직접 해보는 \n 페이스북 마케팅 실무",
    type: "인기 부트 캠프",
    status: "모집중",
    field: "마케팅",
    skill: "엑셀",
    startDate: "2월 26일 부터",
    thumbnail: require("../../assets/images/campImage.png"),
  },
  {
    id: 1,
    campName: "직접 해보는 \n 페이스북 마케팅 실무",
    type: "인기 부트 캠프",
    status: "모집중",
    field: "마케팅",
    skill: "엑셀",
    startDate: "2월 26일 부터",
    thumbnail: require("../../assets/images/campImage.png"),
  },
  {
    id: 2,
    campName: "직접 해보는 \n 페이스북 마케팅 실무",
    type: "인기 부트 캠프",
    status: "모집중",
    field: "마케팅",
    skill: "엑셀",
    startDate: "2월 26일 부터",
    thumbnail: require("../../assets/images/campImage.png"),
  },
  {
    id: 3,
    campName: "직접 해보는 \n 페이스북 마케팅 실무",
    type: "인기 부트 캠프",
    status: "모집중",
    field: "마케팅",
    skill: "엑셀",
    startDate: "2월 26일 부터",
    thumbnail: require("../../assets/images/campImage.png"),
  },
];

const dumyCommunity: ICommunity[] = [
  {
    id: 0,
    tags: ["조회수 TOP", "취업 고민"],
    communityTitle: "합격 메일 답장 어떻게\n할까요?",
    subTitle: "고칠 부분이 있는지 봐주시면\n감사하겠습니다.",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        nickName: "멘토1342",
        content: "안녕하세요 취업 고민 때문에 이글 작성합니다",
      },
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        nickName: "멘토1342",
        content: "안녕하세요 취업 고민 때문에 이글 작성합니다",
      },
    ],
  },
  {
    id: 1,
    tags: ["조회수 TOP", "취업 고민"],
    communityTitle: "합격 메일 답장 어떻게\n할까요?",
    subTitle: "고칠 부분이 있는지 봐주시면\n감사하겠습니다.",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        nickName: "멘토1342",
        content: "안녕하세요 취업 고민 때문에 이글 작성합니다",
      },
    ],
  },
  {
    id: 2,
    tags: ["조회수 TOP", "취업 고민"],
    communityTitle: "합격 메일 답장 어떻게\n할까요?",
    subTitle: "고칠 부분이 있는지 봐주시면\n감사하겠습니다.",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        nickName: "멘토1342",
        content: "안녕하세요 취업 고민 때문에 이글 작성합니다",
      },
    ],
  },
  {
    id: 3,
    tags: ["조회수 TOP", "취업 고민"],
    communityTitle: "합격 메일 답장 어떻게\n할까요?",
    subTitle: "고칠 부분이 있는지 봐주시면\n감사하겠습니다.",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        nickName: "멘토1342",
        content: "안녕하세요 취업 고민 때문에 이글 작성합니다",
      },
    ],
  },
];

const Home = () => {
  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <main>
        <CampSection title="인기 부트 캠프" camps={dumyCamp} />
        <Padding height="48px" />
        <CampSection title="특가 할인 캠프" camps={dumyCamp} />
        <Padding height="56px" />
        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        <Padding height="54px" />
        <CommunitySection title="커뮤니티" communities={dumyCommunity} />
        <Padding height="242px" />
      </main>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 auto;
  main {
    ${mixin.maxWidth};
  }
`;
