import React from "react";
import {
  Container,
  Avatar,
  Names,
  Link,
  Handle,
  FollowBtn,
} from "./styles/userCard";

export default function UserCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UserCard.Avatar = function UserCardAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

UserCard.Names = function UserCardNames({ children, ...restProps }) {
  return <Names {...restProps}>{children}</Names>;
};

UserCard.Link = function UserCardLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

UserCard.Handle = function UserCardHandle({ children, ...restProps }) {
  return <Handle {...restProps}>{children}</Handle>;
};

UserCard.FollowBtn = funtion UserCardFollowBtn({ children, ...restProps }) {
  return <FollowBtn {...restProps}>{children}</FollowBtn>
}