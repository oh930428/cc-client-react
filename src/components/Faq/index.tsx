import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ data }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggleButton = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="faq-article">
      <Question onClick={toggleButton}>
        <div className="question-article">
          <p>Q.&nbsp;</p>
          <p>{data.question}</p>
        </div>
        <FontAwesomeIcon
          className={isToggle ? "click-active" : "click-passive"}
          icon={faAngleUp}
        />
      </Question>
      <Answer style={{ height: `${isToggle ? "100px" : "0px"}` }}>
        <div className="answer-section">
          <p>A.&nbsp;</p>
          <p>{data.answer}</p>
        </div>
      </Answer>
    </div>
  );
};

export default Faq;

const Question = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .question-article {
    display: flex;
    align-items: flex-start;
  }
  .click-active {
    transform: rotate(180deg);
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .click-passive {
    transform: rotate(0deg);
    transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Answer = styled.div`
  margin-bottom: 0.8rem;
  position: relative;
  overflow: hidden;
  transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  .answer-section {
    width: 100%;
    position: absolute;
    display: flex;
  }

  p {
    word-wrap: break-word;
    word-break: break-all;
    line-height: 1.8rem;
  }
`;
