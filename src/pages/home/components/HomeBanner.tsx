import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";

const HomeBanner = ({ text }: { text: string }) => {
  return <Container>{text}</Container>;
};

export default HomeBanner;

const Container = styled.div`
  padding: 33px 42px;
  background-color: ${colors.primary1};
  color: ${colors.white};
  ${fonts.H2}
`;
