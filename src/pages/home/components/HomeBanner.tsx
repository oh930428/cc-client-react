import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

const HomeBanner = ({ text }: { text: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <Container>
      <span className={`${isMobile && "homebanner-mobile"}`}>{text}</span>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  padding: 33px 42px;
  background-color: ${colors.primary1};
  color: ${colors.white};
  ${fonts.H2}

  .homebanner-mobile {
    white-space: pre-line;
  }
`;
