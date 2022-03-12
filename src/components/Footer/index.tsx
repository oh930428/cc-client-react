import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { colors, fonts, mixin } from "styles";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <Container>
      {isMobile ? (
        <footer className="footer-mobile">
          <div className="footer-logo-mobile">
            <img
              src={require("../../assets/images/logo_noWhite.png")}
              alt="caffeIn logo"
            />
            <div className="footer-icons-mobile">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
          <div className="footer-section">
            <div>
              대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
            </div>
            <br />
            <div>Copyright by (주)카페인. All right reserved.</div>
            <div>이용약관 개인정보처리방침</div>
          </div>
        </footer>
      ) : (
        <footer className="footer-desktop">
          <div className="footer-logo-desktop">
            <img
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
          <div className="footer-icons-desktop">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </footer>
      )}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${colors.gray5};

  .footer-mobile {
    display: flex;
    flex-direction: column;
    padding: 27px 18px;

    .footer-logo-mobile {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 24px;

      img {
        display: flex;
        flex: 1;
      }

      .footer-icons-mobile {
        display: flex;
        justify-content: flex-end;
        flex: 2;
        gap: 6px;
      }
    }
  }

  .footer-desktop {
    ${mixin.maxWidth};
    display: flex;
    justify-content: space-between;
    padding: 32px;

    .footer-logo-desktop {
    }
    .footer-icons-desktop {
      display: flex;
      gap: 6px;
    }
  }

  .footer-section {
    ${fonts.Body2_Regular}
  }

  .icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${colors.gray3};
  }
`;
