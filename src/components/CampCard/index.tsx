import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import fonts from "styles/fonts";
import { campListType } from "types/type";

interface CardProps {
  camps: campListType;
  isMobile: boolean;
}

const Card = ({ camps, isMobile }: CardProps) => {
  return (
    <Link to={`/camps/${camps.id}`}>
      <Container bgImg={camps.data.thumbnail} bgWidth={isMobile}>
        <BgOpacityBlack />
        <div className="card-content">
          <div className="card-head">{camps.data.status}</div>
          <div className="card-name">{camps.data.campName}</div>
          <div className="card-start-date">{camps.data.startDate}</div>
        </div>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div<{ bgImg: string; bgWidth: boolean }>`
  position: relative;
  width: ${(props) => (props.bgWidth ? "100%" : "224px")};
  height: 280px;
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .card-content {
    padding: 20px;
    z-index: 1;
  }
  .card-head {
    color: ${colors.white};
    ${fonts.Body2_Regular};
    margin-bottom: 11px;
  }
  .card-name {
    color: ${colors.white};
    ${fonts.Body1_Bold};
    margin-bottom: 11px;
    white-space: pre-line;
  }
  .card-start-date {
    color: ${colors.white};
    ${fonts.Caption_Regular}
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0 0 10px 10px;
`;
