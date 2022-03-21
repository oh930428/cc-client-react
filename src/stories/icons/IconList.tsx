import React from "react";
import styled from "styled-components";

interface IconProps {
  id: number;
  iconBgColor?: string;
  style: object;
  iconImage: string;
  iconName: string;
  iconShadow?: string;
}

interface IconListProps {
  items: IconProps[];
}

const IconList = ({ items }: IconListProps) => {
  return (
    <Container>
      {items.map((item) => (
        <Icon
          key={item.id}
          iconBgColor={item.iconBgColor}
          style={item.style}
          iconShadow={item.iconShadow}
        >
          <img src={item.iconImage} alt={item.iconName} />
        </Icon>
      ))}
    </Container>
  );
};

export default IconList;

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.div<{
  iconBgColor?: string;
  style: object;
  iconShadow?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: ${(props) => props.style.width};
  height: ${(props) => props.style.height};
  padding: ${(props) => props.style.padding};
  background-color: ${(props) =>
    props.iconBgColor ? props.iconBgColor : "#fff"};
  box-shadow: ${(props) => (props.iconShadow ? props.iconShadow : "null")};
`;
