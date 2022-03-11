import React from "react";
import styled from "styled-components";
import { colors, fonts, mixin } from "styles";

const Footer = () => {
  return (
    <Container>
      <footer>
        <div>
          <img
            className="footer-logo"
            src={require("../../assets/images/logo_noWhite.png")}
            alt="caffeIn logo"
          />
        </div>
        <div className="footer-section">
          <div>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </div>
          <br />
          <div>Copyright by (주)카페인. All right reserved.</div>
          <div>이용약관 개인정보처리방침</div>
        </div>
        <div className="footer-icons">
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 32px;
  background-color: ${colors.gray5};

  footer {
    ${mixin.maxWidth};
    display: flex;
    justify-content: space-between;

    .footer-logo {
      display: flex;
    }

    .footer-section {
      ${fonts.Body2_Regular}
    }

    .footer-icons {
      display: flex;
      gap: 6px;
    }

    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${colors.gray3};
    }
  }
`;
