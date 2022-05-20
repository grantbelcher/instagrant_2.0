import React, { useState, useEffect } from "react";
import { Replies } from "../components";
import CommentContainer from "./comment";
export default function ReplyList({ children, ...restProps }) {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible((prevState) => {
      console.log(prevState, "prevState");
      return !prevState;
    });
    // console.log("eyyyyy");
  };

  return (
    <Replies>
      <Replies.ViewBtn onClick={clickHandler} />
      <CommentContainer isReply={true} visible={visible} />
      <CommentContainer isReply={true} visible={visible} />
      <CommentContainer isReply={true} visible={visible} />
    </Replies>
  );
}
