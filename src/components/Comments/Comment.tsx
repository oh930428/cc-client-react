import React from "react";
import styled from "styled-components";
import { fonts } from "styles";
import { commentType } from "types/type";

interface CommentProps {
  comment: commentType;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <Container>
      <div>
        <Profile img={comment.profile} />
      </div>
      <div>
        <div className="comment_nickname">{comment.nickName}</div>
        <div className="comment_content">{comment.content}</div>
      </div>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  .comment_nickname {
    ${fonts.Caption_Bold}
  }
  .comment_content {
    width: 141px;
    ${fonts.Caption_Medium}
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Profile = styled.div<{ img: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
