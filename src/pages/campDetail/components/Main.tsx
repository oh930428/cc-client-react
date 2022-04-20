import React from "react";
import styled from "styled-components";
import { mixin } from "styles";

interface ImageProps {
  images: string[];
}

const Main = ({ images }: ImageProps) => {
  return (
    <MainSection>
      <div className="main-section">
        <div className="article">
          {images.map((img, index) => (
            <img key={index} src={img} alt="mainImages" />
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default Main;

const MainSection = styled.main`
  .main-section {
    ${mixin.maxWidth}
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .article {
      width: 39rem;
    }
  }
`;
