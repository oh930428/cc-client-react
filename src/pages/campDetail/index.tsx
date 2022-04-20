import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import CampStore from "stores/CampStore";
import styled from "styled-components";

import { Footer, Navigation, Padding } from "components";
import { Header, Main, Reviews, StudyPoint, FaqSection } from "./components";

const CampDetail = () => {
  const { id } = useParams();
  const campStore = useContext(CampStore);

  useEffect(() => {
    campStore.fetchCampsById(id);
  }, [id, campStore]);

  return (
    <Container>
      <Navigation />
      <Padding height="4rem" />
      {campStore.targetCamp && (
        <Header
          headerimage={campStore.targetCamp.headerImage}
          name={campStore.targetCamp.name}
          process={campStore.targetCamp.process}
          reviewmaterial={campStore.targetCamp.reviewMaterial}
          seat={campStore.targetCamp.seat}
          startDate={campStore.targetCamp.startDate}
        />
      )}
      <Padding height="4rem" />
      {campStore.targetCamp && <Main images={campStore.targetCamp.images} />}
      <Padding height="4rem" />
      {campStore.targetCamp && (
        <Reviews reviews={campStore.targetCamp.reviews} />
      )}
      <Padding height="4rem" />
      <StudyPoint />
      <Padding height="4rem" />
      {campStore.targetCamp && <FaqSection faqs={campStore.targetCamp.faqs} />}
      <Footer />
    </Container>
  );
};

export default observer(CampDetail);

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;
