import { useContext, useEffect } from "react";
import styled from "styled-components";

import { Footer, Navigation, Padding } from "components";
import {
  HeaderSection,
  CampSection,
  CommunitySection,
  HomeBanner,
} from "./components";

import { mixin } from "styles";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react-lite";

import CampStore from "stores/CampStore";
import CommunityStore from "stores/CommunityStore";

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const campStore = useContext(CampStore);
  const communityStore = useContext(CommunityStore);

  useEffect(() => {
    campStore.fetchCampsPopular();
    campStore.fetchCampsSale();
    communityStore.fetchCommunity();
  }, [campStore, communityStore]);

  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <main>
        <Padding height="64px" />
        {campStore.campPopular && (
          <CampSection title="인기 부트 캠프" camps={campStore.campPopular} />
        )}
        <Padding height="48px" />
        {campStore.campSales && (
          <CampSection title="특가 할인 캠프" camps={campStore.campSales} />
        )}
        <Padding height="56px" />
        <HomeBanner
          text={`현직자와 소통하며 배우는\n실무 스킬, 퍼스널 트레이닝`}
        />
        <Padding height="54px" />
        {communityStore.allCommunity && (
          <CommunitySection
            title="커뮤니티"
            communities={communityStore.allCommunity}
          />
        )}
        {!isMobile && <Padding height="242px" />}
      </main>
      <Footer />
    </Container>
  );
};

export default observer(Home);

const Container = styled.div`
  margin: 0 auto;
  main {
    ${mixin.maxWidth};
  }
`;
