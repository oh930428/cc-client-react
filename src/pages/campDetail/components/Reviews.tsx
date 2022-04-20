import { Padding } from "components";
import React from "react";
import styled from "styled-components";
import { mixin, fonts, colors } from "styles";

interface ReviewProps {
  reviews: { content: string; reviewer: string }[];
}

const Reviews = ({ reviews }: ReviewProps) => {
  return (
    <Review>
      <div className="review-section">
        <div className="article">
          <div className="article-title">
            먼저 트레이닝 받은 분들의 <br /> 이야기를 틀어보세요
          </div>
          <Padding height="2rem" />
          <div className="article-contents">
            {reviews.map((review, index) => (
              <div className="review" key={index}>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <div className="reviewer">{`- ${review.reviewer}`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Review>
  );
};

export default Reviews;

const Review = styled.section`
  background-color: #f5fafc;
  padding-block: 2rem;

  .review-section {
    ${mixin.maxWidth}
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .article {
      width: 39rem;

      .article-title {
        ${fonts.H3};
      }
      .article-contents {
        column-count: 2;
        column-gap: 1.5rem;

        .review {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          ${fonts.Body2_Bold}
          height: 14rem;
          padding: 1rem;
          background-color: ${colors.white};
          line-height: 1.6rem;
          margin-bottom: 1.5rem;
        }
        .review:first-of-type,
        .review:last-of-type {
          height: 17rem;
        }
      }
    }
  }
`;
