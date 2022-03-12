import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { mixin } from "styles";
import { useMediaQuery } from "react-responsive";

const HeaderSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Container
      className={`${!isMobile && "headersection-container"}`}
      bgImg={require("assets/images/home_header_bg.png")}
    >
      <div
        className={`${
          isMobile ? "header-contents-mobile" : "header-contents-desktop"
        }`}
      >
        <div
          className={`${
            isMobile
              ? "header-contents-mobile-title"
              : "header-contents-desktop-title"
          }`}
        >
          {`개발은\n카페인과 함께`}
          {/* to-do: swipper 작업 해야됨 */}
        </div>
        <div
          className={`${
            isMobile
              ? "header-contents-mobile-img"
              : "header-contents-desktop-img"
          }`}
        />
      </div>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.header<{ bgImg: string }>`
  background-image: url(${(props) => props.bgImg});
  padding: 104px 16px 32px;

  .headersection-container {
    padding: 104px 16px 56px;
    box-sizing: border-box;
    margin-bottom: 56px;
  }

  .header-contents-mobile {
    ${mixin.maxWidth}
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .header-contents-desktop {
    ${mixin.maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header-contents-mobile-title {
    color: ${colors.white};
    ${fonts.H1};
  }

  .header-contents-mobile-img {
    background-image: url(${require("../../../assets/images/home_thumbnail.png")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 240px;
  }

  .header-contents-desktop-title {
    flex: 1;
    white-space: pre-line;
    color: ${colors.white};
    ${fonts.HCT};
  }

  .header-contents-desktop-img {
    flex: 2;
    background-image: url(${require("../../../assets/images/home_thumbnail.png")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 400px;
  }
`;
