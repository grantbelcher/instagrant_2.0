import React from "react";
import { Comment } from "../components";
import ReplyList from "./ReplyList";
export default function CommentContainer({ isReply = false }) {
  return (
    <>
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
                <Comment.Date>53w</Comment.Date>
                <Comment.Button>43 likes</Comment.Button>
                <Comment.Button>Reply</Comment.Button>
              </Comment.Info>
            </Comment.TextContainer>
          </Comment.Content>
        </Comment.LeftGroup>
        <Comment.RightGroup>
          <Comment.IconBtn />
        </Comment.RightGroup>
      </Comment>
      {isReply ? null : <ReplyList />}
    </>
  );
}
