import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { IComment } from "types/type";

const Comments = ({ comments }: { comments: IComment[] }) => {
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
