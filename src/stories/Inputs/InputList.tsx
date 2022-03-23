import React from "react";
import styles from "stories/styles/styles";
import styled, { css } from "styled-components";

interface InputListProps {
  bgColor: string;
  items: {
    id: number;
    placeholder: string;
    frontIcon?: string;
    backIcon?: string;
  }[];
  size: string;
}

const InputList = ({ items, bgColor, size }: InputListProps) => {
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

export default InputList;

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
          ${styles.SmallIcon}
        }
        input {
          ${styles.SmallInput}
        }
      }
      .Regular {
        padding: 15px 14px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${styles.RegularIcon}
        }
        input {
          ${styles.RegularInput}
        }
      }
      .Large {
        padding: 19px 18px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${styles.LargeIcon}
        }
        input {
          ${styles.LargeInput}
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
          ${styles.SmallIcon}
        }
        input {
          ${styles.SmallInput}
        }
      }
      .Regular {
        padding: 15px 14px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${styles.RegularIcon}
        }
        input {
          ${styles.RegularInput}
        }
      }
      .Large {
        padding: 19px 18px 12px;
        gap: 9px;
        .frontIcon,
        .backIcon {
          ${styles.LargeIcon}
        }
        input {
          ${styles.LargeInput}
        }
      }
    `}
`;

// ${(props) =>
//   props.bgColor === "grey" &&
//   css`
//     background-color: #e2e8f0;
//     .inputDiv {
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       padding: 15px 12px;
//       background-color: #fff;
//       box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
//         0px 1px 2px rgba(0, 0, 0, 0.06);
//       border-radius: 4px;
//       gap: 8px;
//     }
//     .frontIcon,
//     .backIcon {
//       width: 16px;
//       height: 18px;
//     }
//     input {
//       width: 100%;
//       border: none;
//     }
//   `}

// ${(props) =>
//   props.bgColor === "white" &&
//   css`
//     background-color: #fff;
//     .inputDiv {
//       width: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       padding: 15px 12px;
//       background-color: #fff;
//       border: 1px solid #cbd5e0;
//       border-radius: 4px;
//       gap: 8px;
//     }
//     .frontIcon,
//     .backIcon {
//       width: 16px;
//       height: 18px;
//     }
//     input {
//       width: 100%;
//       border: none;
//     }
//   `}
// `;
