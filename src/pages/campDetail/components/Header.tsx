import { Padding, Tag } from "components";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { colors, fonts, mixin } from "styles";

interface HeaderProps {
  headerimage: string;
  name: string;
  process: string;
  reviewmaterial: string[];
  seat: string;
  startDate: string;
}

const Header = ({
  headerimage,
  name,
  process,
  reviewmaterial,
  seat,
  startDate,
}: HeaderProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(true);

  const scrollHandler = () => {
    if (window.scrollY >= 3840) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  });

  return (
    <HeaderSection>
      <div className="banner"></div>
      <div className="header-article">
        <img src={headerimage} alt="headerImage" />
        <Sidebar isScroll={isScroll}>
          <div className="sidebar">
            <div className="sidebar-title">
              <p>{name}</p>
            </div>
            <Padding height="1rem" />
            <div className="sidebar-tags">
              <Tag tags={reviewmaterial} />
            </div>
            <Padding height="1rem" />
            <div className="sidebar-content">
              <div className="content-titles">
                <p>시작일</p>
                <p>수업 과정</p>
                <p>정원</p>
              </div>
              <div className="content-content">
                <p>{startDate}</p>
                <p>{seat}</p>
                <p>{process}</p>
              </div>
            </div>
            <Padding height="1rem" />
            <div className="sidebar-button">
              <div>더 잘하는 개발자 되기</div>
            </div>
          </div>
        </Sidebar>
      </div>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  width: 100vw;
  .banner {
    height: 15rem;
    background-color: #0384ae;
  }
  .header-article {
    ${mixin.maxWidth}
    margin-top: -10rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    img {
      width: 39rem;
    }
  }
`;

const Sidebar = styled.div<{ isScroll: boolean }>`
  box-sizing: border-box;
  position: relative;

  ${(props) =>
    props.isScroll
      ? css`
          .sidebar {
            box-sizing: border-box;
            background-color: ${colors.white};
            position: fixed;
            width: 302px;
            border-radius: 0.5rem;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;

            .sidebar-title {
              font-weight: bold;
              font-size: 19px;
              line-height: 26px;
              word-spacing: 5px;
            }

            .sidebar-content {
              display: flex;
              justify-content: space-between;
              line-height: 1.3rem;

              .content-titles {
                display: flex;
                flex-flow: column;
              }

              .content-content {
                display: flex;
                flex-flow: column;
                align-items: flex-end;
              }
            }

            .sidebar-button {
              ${fonts.H4}
              display: flex;
              justify-content: center;
              padding: 1rem 2rem;
              background-color: dodgerblue;
              color: ${colors.white};
              border-radius: 0.5rem;
            }
          }
        `
      : css`
          .sidebar {
            box-sizing: border-box;
            background-color: ${colors.white};
            position: absolute;
            width: 302px;
            border-radius: 0.5rem;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;

            .sidebar-title {
              font-weight: bold;
              font-size: 19px;
              line-height: 26px;
              word-spacing: 5px;
            }

            .sidebar-content {
              display: flex;
              justify-content: space-between;
              line-height: 1.3rem;

              .content-titles {
                display: flex;
                flex-flow: column;
              }

              .content-content {
                display: flex;
                flex-flow: column;
                align-items: flex-end;
              }
            }

            .sidebar-button {
              ${fonts.H4}
              display: flex;
              justify-content: center;
              padding: 1rem 2rem;
              background-color: dodgerblue;
              color: ${colors.white};
              border-radius: 0.5rem;
            }
          }
        `}
`;
