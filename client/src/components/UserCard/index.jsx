import React from "react";
import {
  Container,
  Group,
  Avatar,
  Names,
  Handle,
  FollowBtn,
  Name,
} from "./styles/userCard";

export default function UserCard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UserCard.Group = function UserCardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

UserCard.Avatar = function UserCardAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

UserCard.Names = function UserCardNames({ children, ...restProps }) {
  return <Names {...restProps}>{children}</Names>;
};

UserCard.Name = function UserCardLink({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

UserCard.Handle = function UserCardHandle({ children, ...restProps }) {
  return <Handle {...restProps}>{children}</Handle>;
};

UserCard.FollowBtn = function UserCardFollowBtn({ children, ...restProps }) {
  return <FollowBtn {...restProps}>{children}</FollowBtn>;
};
