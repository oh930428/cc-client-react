import React from "react";
import styled from "styled-components";
import { communityListType } from "types/type";
import { Tag, Comments, Padding } from "components";
import { fonts, colors } from "styles";

interface CommunityProps {
  community: communityListType;
}

const CommunityCard = ({ community }: CommunityProps) => {
  return (
    <Container>
      <Tag tags={community.data.tags} />
      <Padding height="8px" />
      <div className="communitycard-title">{community.data.communityTitle}</div>
      <Padding height="10px" />
      <div className="communitycard-subtitle">{community.data.subTitle}</div>
      <Padding height="62px" />
      <Comments comments={community.data.comments} />
      <Padding height="17px" />
    </Container>
  );
};

export default CommunityCard;

const Container = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  .communitycard-title {
    ${fonts.Body1_Bold};
    white-space: pre-line;
  }
  .communitycard-subtitle {
    ${fonts.Body2_Regular};
    white-space: pre-line;
  }
`;
