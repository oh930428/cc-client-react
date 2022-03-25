import { useEffect, useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import { getCampsByType } from "apis/campApi";
import { getAllCommunity } from "apis/communityApi";

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  const [communities, setCommunities] = useState<ICommunity[]>();
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    fetchCamps("popular");
    fetchCamps("sale");
    fetchCommunity();
  }, []);

  const fetchCamps = async (type: string) => {
    const camps = await getCampsByType(type);
    type === "popular" ? setPopularCamps(camps) : setSaleCamps(camps);
  };

  const fetchCommunity = async () => {
    const communities = await getAllCommunity();
    setCommunities(communities);
  };

  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <main>
        <Padding height="64px" />
        {popularCamps && (
          <CampSection title="인기 부트 캠프" camps={popularCamps} />
        )}
        <Padding height="48px" />
        {saleCamps && <CampSection title="특가 할인 캠프" camps={saleCamps} />}
        <Padding height="56px" />
        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        <Padding height="54px" />
        {communities && (
          <CommunitySection title="커뮤니티" communities={communities} />
        )}
        {!isMobile && <Padding height="242px" />}
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
