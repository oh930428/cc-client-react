import React from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  id: number;
  placeholder: string;
  frontIcon?: string;
  backIcon?: string;
}

interface InputListProps {
  bgColor: string;
  items: InputProps[];
}

const InputList = ({ bgColor, items }: InputListProps) => {
  return (
    <Container bgColor={bgColor}>
      {items.map((item) => (
        <div className="inputDiv">
          {item.frontIcon && (
            <img src={item.frontIcon} alt="Lock" className="frontIcon" />
          )}
          <input key={item.id} placeholder={item.placeholder} type="text" />
          {item.backIcon && (
            <img src={item.backIcon} alt="person" className="backIcon" />
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
        justify-content: flex-start;
        padding: 15px 12px;
        background-color: #fff;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
          0px 1px 2px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        gap: 8px;
      }
      .frontIcon,
      .backIcon {
        width: 16px;
        height: 18px;
      }
      input {
        width: 100%;
        border: none;
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
        justify-content: flex-start;
        padding: 15px 12px;
        background-color: #fff;
        border: 1px solid #cbd5e0;
        border-radius: 4px;
        gap: 8px;
      }
      .frontIcon,
      .backIcon {
        width: 16px;
        height: 18px;
      }
      input {
        width: 100%;
        border: none;
      }
    `}
`;
