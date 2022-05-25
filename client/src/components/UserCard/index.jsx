import React from "react";
import {
  Container,
  Group,
  Avatar,
  Text,
  Main,
  Sub,
  FollowBtn,
  Time,
  Notification,
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

UserCard.Text = function UserCardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

UserCard.Sub = function UserCardSub({ children, ...restProps }) {
  return <Sub {...restProps}>{children}</Sub>;
};

UserCard.Main = function UserCardMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

UserCard.FollowBtn = function UserCardFollowBtn({ children, ...restProps }) {
  return <FollowBtn {...restProps}>{children}</FollowBtn>;
};

UserCard.Time = function UserCardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

UserCard.Notification = function UserCardNotification() {
  return <Notification />;
};
