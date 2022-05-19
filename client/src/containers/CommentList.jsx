import React from "react";
import styled from "styled-components";
import CommentContainer from "./comment";

const Container = styled.ul`
  height: 360px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  list-style-type: none;
  padding: 10px;
  margin: 0;
  overflow-y: scroll;
`;

// Container,
// LeftGroup,
// RightGroup,
// TextContainer,
// ProfilePic,
// Content,
// Name,
// Text,
// Info,
// Date,
// Button,

export default function CommentList() {
  return (
    <Container>
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
      <CommentContainer />
    </Container>
  );
}
