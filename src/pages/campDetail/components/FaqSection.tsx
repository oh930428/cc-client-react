import React from "react";
import styled from "styled-components";

import { mixin, fonts } from "styles";
import { Faq } from "components";

interface FaqsProps {
  faqs: { id: number; answer: string; question: string }[];
}

const FaqSection = ({ faqs }: FaqsProps) => {
  return (
    <FaqsSection>
      <div className="faq-section">
        <div className="article">
          <div className="article-title">FAQ</div>
          {faqs.map((faq) => (
            <Faq key={faq.id} data={faq} />
          ))}
        </div>
      </div>
    </FaqsSection>
  );
};

export default FaqSection;

const FaqsSection = styled.section`
  background-color: #f5fafc;
  padding-block: 2rem;

  .faq-section {
    ${mixin.maxWidth}
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .article {
      width: 39rem;

      .article-title {
        ${fonts.H3};
        padding-bottom: 1rem;
      }

      .faq-article {
        padding-block: 1rem;
      }
    }
  }
`;
