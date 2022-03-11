import React from "react";
import styled, { css } from "styled-components";

interface PaddingProps {
  width?: string;
  height?: string;
}

const Padding = ({ width, height }: PaddingProps) => {
  return <Container height={height} width={width}></Container>;
};

export default Padding;

const Container = styled.div<{ width?: string; height?: string }>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
