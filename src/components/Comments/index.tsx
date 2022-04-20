import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { commentType } from "types/type";

const Comments = ({ comments }: { comments: commentType[] }) => {
  return (
    <Container>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  padding-right: 13px;
`;
