import React from "react";
import styled from "styled-components";
import { colors, fonts } from "styles";

const Tag = ({ tags }: { tags: string[] }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <div key={index} className="tag-wrapper">
          {tag}
        </div>
      ))}
    </Container>
  );
};

export default Tag;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;

  .tag-wrapper {
    border-radius: 4px;
    padding: 4px 3px;
    ${fonts.Caption_Bold}
  }
  .tag-wrapper:nth-child(odd) {
    background-color: ${colors.primary1};
    color: ${colors.white};
  }
  .tag-wrapper:nth-child(even) {
    background-color: ${colors.gray4};
    color: ${colors.black};
  }
`;
