import { Padding } from "components";
import React from "react";
import styled from "styled-components";
import { mixin, fonts } from "styles";

const StudyPoint = () => {
  return (
    <StudyPoints>
      <div className="study-point-section">
        <div className="article">
          <div className="article-title">
            React, 할 수 있게 만드는 <br /> 3가지 학습 포인트
          </div>
          <Padding height="2rem" />
          <div className="article-contents">
            <div className="content">
              <div className="content-img">
                <img
                  src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-live.png"
                  alt="라이브로 소통하는 수업 이미지"
                />
              </div>
              <div className="content-title">라이브로 소통하는 수업</div>
              <div className="content-subtitle">
                화면만 보는 VOD와 달라요. <br /> 라이브로 배우고, 직접
                소통하세요.
              </div>
            </div>
            <div className="content">
              <div className="content-img">
                <img
                  src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-curriculum.png"
                  alt="실무 베이스 커리큘럼 이미지"
                />
              </div>
              <div className="content-title">실무 베이스 커리큘럼</div>
              <div className="content-subtitle">
                실무 적용까지 생각한 커리큘럼! <br /> 이론과 실습을 함께
                해결하세요.
              </div>
            </div>
            <div className="content">
              <div className="content-img">
                <img
                  src="https://cdn.comento.kr/images/class/pt/detail/icon/pt-detail-differentiation-qna.png"
                  alt="몰입을 만드는 수강환경 이미지"
                />
              </div>
              <div className="content-title">몰입을 만드는 수강환경</div>
              <div className="content-subtitle">
                멘토와의 1:1 대화는 물론, <br /> 러닝메이트와 함께 스터디하세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudyPoints>
  );
};

export default StudyPoint;

const StudyPoints = styled.section`
  .study-point-section {
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        .content {
          padding: 1rem;
          background-color: #f9fbfc;
          display: flex;
          flex-flow: column;
          align-items: center;

          .content-img {
            width: 7rem;
            margin: 0 auto 12px;
          }

          .content-title {
            ${fonts.Body1_Bold}
            line-height: 2rem;
          }
          .content-subtitle {
            ${fonts.Caption_Medium}
            text-align: center;
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
