import React from "react";
import {
  Container,
  LeftGroup,
  RightGroup,
  TextContainer,
  ProfilePic,
  Content,
  Name,
  Text,
  Info,
  Date,
  Button,
  ViewReplies,
  IconBtn,
} from "./styles/comment";
import { Heart } from "phosphor-react";

export default function Comment({
  visible = true,
  isReply,
  children,
  ...restProps
}) {
  return (
    <Container visible={visible} {...restProps}>
      {children}
    </Container>
  );
}

Comment.LeftGroup = function CommentLeftGroup({ children, ...restProps }) {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};
Comment.RightGroup = function CommentRightGroup({ children, ...restProps }) {
  return <RightGroup {...restProps}>{children}</RightGroup>;
};

Comment.ProfilePic = function CommentProfilePic({ children, ...restProps }) {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};

Comment.TextContainer = function CommentTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

Comment.Content = function CommentContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Comment.Name = function CommentName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Comment.Text = function CommentText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Comment.Info = function CommentInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Comment.Date = function CommentDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

Comment.Button = function CommentButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Comment.ViewReplies = function CommentViewReplies({ children, ...restProps }) {
  return (
    <ViewReplies {...restProps}>
      <div />
      <span>View replies</span>
    </ViewReplies>
  );
};

Comment.IconBtn = function CommentIconBtn({ children, ...restProps }) {
  return (
    <IconBtn {...restProps}>
      <Heart />
    </IconBtn>
  );
};
