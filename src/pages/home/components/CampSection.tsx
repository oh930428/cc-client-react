import React from "react";
import styled from "styled-components";
import CampCard from "components/CampCard";
import { mixin, fonts } from "styles";
import { ICamp } from "types/type";
import { useMediaQuery } from "react-responsive";

interface CampProps {
  title: string;
  camps: ICamp[];
}

const ContentsSection = ({ title, camps }: CampProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Container>
      <div
        className={`${isMobile ? "camp-title-mobile" : "camp-title-desktop"}`}
      >
        {title}
      </div>
      <div
        className={`${
          isMobile ? "camp-contents-mobile" : "camp-contents-desktop"
        }`}
      >
        {camps.map((camp) => (
          <CampCard key={camp.id} camps={camp} isMobile={isMobile} />
        ))}
      </div>
    </Container>
  );
};

export default ContentsSection;

const Container = styled.div`
  ${mixin.maxWidth};
  display: flex;
  flex-direction: column;

  .camp-title-mobile {
    ${fonts.H2};
    padding: 24px 24px 12px;
  }

  .camp-title-desktop {
    ${fonts.H2};
    margin-bottom: 10px;
  }

  .camp-contents-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 24px 24px;
  }

  .camp-contents-desktop {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
