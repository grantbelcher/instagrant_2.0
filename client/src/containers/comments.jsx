import React from "react";
import styled from "styled-components";
import { Comment } from "../components";

const Container = styled.div`
  height: 360px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
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
          <Comment.TextContainer>
            <Comment.ProfilePic />
            <Comment.Content>
              <Comment.Name>ramesjivers</Comment.Name>
              <Comment.Text>
                All I see are two linebackers. One happens to play MLB
              </Comment.Text>
              <Comment.Info>
                <a>35m</a>
                <Comment.Button>43 likes</Comment.Button>
                <Comment.Button>Reply</Comment.Button>
              </Comment.Info>
            </Comment.Content>
          </Comment.TextContainer>
        </Comment.LeftGroup>
        <Comment.RightGroup></Comment.RightGroup>
      </Comment>
    </Container>
  );
}
