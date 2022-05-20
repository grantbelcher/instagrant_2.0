import React from "react";
import { Replies } from "../components";
import CommentContainer from "./comment";
export default function ReplyList({ children, ...restProps }) {
  return (
    <Replies>
      <Replies.ViewBtn />
      <CommentContainer isReply={true} />
      <CommentContainer isReply={true} />
      <CommentContainer isReply={true} />
    </Replies>
  );
}
