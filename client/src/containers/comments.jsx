import React from "react";
import styled from "styled-components";
import { Comment } from "../components";

const Container = styled.ul`
  height: 360px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  list-style-type: none;
  padding: 10px;
  margin: 0;
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

export default function Comments() {
  return (
    <Container>
      <Comment>
        <Comment.LeftGroup>
          <Comment.Content>
            <Comment.ProfilePic />
            <Comment.TextContainer>
              <Comment.Name>ramesjivers</Comment.Name>
              <Comment.Text>
                All I see are two linebackers. One happens to play MLB
              </Comment.Text>
              <Comment.Info>
                <a>35m</a>
                <Comment.Button>43 likes</Comment.Button>
                <Comment.Button>Reply</Comment.Button>
              </Comment.Info>
            </Comment.TextContainer>
          </Comment.Content>
        </Comment.LeftGroup>
        <Comment.RightGroup>H</Comment.RightGroup>
      </Comment>
    </Container>
  );
}
