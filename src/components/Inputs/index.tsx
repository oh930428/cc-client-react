import React from "react";
import styled, { css } from "styled-components";
import { sizes } from "styles";

export interface InputListProps {
  bgColor: string;
  items: {
    id: number;
    placeholder: string;
    frontIcon?: string;
    backIcon?: string;
  }[];
  size: string;
}

const Inputs = ({ items, bgColor, size }: InputListProps) => {
  return (
    <Container bgColor={bgColor}>
      {items.map((item) => (
        <div key={item.id} className={`inputDiv ${size}`}>
          {item.frontIcon && (
            <img src={item.frontIcon} alt="frontIcon" className="frontIcon" />
          )}
          <input type="text" placeholder={item.placeholder} />
          {item.backIcon && (
            <img src={item.backIcon} alt="backIcon" className="backIcon" />
          )}
        </div>
      ))}
    </Container>
  );
};

export default Inputs;

const Container = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 23px 17px;
  gap: 28px;
  border: 1px solid #cbd5e0;

  ${(props) =>
    props.bgColor === "grey" &&
    css`
      background-color: #e2e8f0;
      .inputDiv {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .Small {
        padding: 7px 6px 8px;
        gap: 5px;
        .frontIcon,
        .backIcon {
          ${sizes.SmallIcon}
        }
        input {
          ${sizes.SmallInput}
        }
      }
      .Regular {
        padding: 15px 14px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${sizes.RegularIcon}
        }
        input {
          ${sizes.RegularInput}
        }
      }
      .Large {
        padding: 19px 18px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${sizes.LargeIcon}
        }
        input {
          ${sizes.LargeInput}
        }
      }
    `}

  ${(props) =>
    props.bgColor === "white" &&
    css`
      background-color: #fff;
      .inputDiv {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #cbd5e0;
        border-radius: 4px;
      }
      .Small {
        padding: 7px 6px 8px;
        gap: 5px;
        .frontIcon,
        .backIcon {
          ${sizes.SmallIcon}
        }
        input {
          ${sizes.SmallInput}
        }
      }
      .Regular {
        padding: 15px 14px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${sizes.RegularIcon}
        }
        input {
          ${sizes.RegularInput}
        }
      }
      .Large {
        padding: 19px 18px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${sizes.LargeIcon}
        }
        input {
          ${sizes.LargeInput}
        }
      }
    `}
`;
