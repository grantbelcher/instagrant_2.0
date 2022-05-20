import React from "react";
import { Container, ViewBtn } from "./styles/replies";

export default function Replies({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Replies.ViewBtn = function RepliesViewBtn({ children, ...restProps }) {
  return (
    <ViewBtn {...restProps}>
      <div />
      <span>View replies</span>
    </ViewBtn>
  );
};
