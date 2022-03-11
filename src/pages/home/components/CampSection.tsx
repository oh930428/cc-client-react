import React from "react";
import styled from "styled-components";
import CampCard from "components/CampCard";
import { mixin, fonts } from "styles";
import { ICamp } from "types/type";

interface CampProps {
  title: string;
  camps: ICamp[];
}

const ContentsSection = ({ title, camps }: CampProps) => {
  return (
    <Container>
      <div className="camp-title">{title}</div>
      <div className="camp-contents">
        {camps.map((camp) => (
          <CampCard key={camp.id} camps={camp} />
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

  .camp-title {
    ${fonts.H2};
    margin-bottom: 10px;
  }

  .camp-contents {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
