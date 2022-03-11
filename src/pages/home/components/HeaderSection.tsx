import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { mixin } from "styles";

const HeaderSection = () => {
  return (
    /* to-do: 반응형 작업 해야됨(mobile일 경우) */
    <Container bgImg={require("assets/images/home_header_bg.png")}>
      <div className="header-contents">
        <div className="header-contents-title">
          {`개발은 \n카페인과 함께`}
          {/* to-do: swipper 작업 해야됨 */}
        </div>
        <div className="header-contents-img" />
      </div>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.header<{ bgImg: string }>`
  background-image: url(${(props) => props.bgImg});
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;

  .header-contents {
    ${mixin.maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header-contents-title {
    flex: 1;
    white-space: pre-line;
    color: ${colors.black};
    ${fonts.HCT};
  }

  .header-contents-img {
    flex: 2;
    background-image: url(${require("../../../assets/images/home_thumbnail.png")});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height: 400px;
  }
`;
