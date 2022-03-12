import CommunityCard from "components/CommunityCard";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { mixin, fonts } from "styles";
import { ICommunity } from "types/type";

interface CommunityProps {
  title: string;
  communities: ICommunity[];
}

const CommunitySection = ({ title, communities }: CommunityProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return isMobile ? null : (
    <Container>
      <div className="community-title">{title}</div>
      <div className="community-contents">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </Container>
  );
};

export default CommunitySection;

const Container = styled.div`
  ${mixin.maxWidth};
  display: flex;
  flex-direction: column;

  .community-title {
    ${fonts.H2};
    margin-bottom: 11px;
  }
  .community-contents {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
