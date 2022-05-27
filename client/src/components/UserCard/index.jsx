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

UserCard.Time = function UserCardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

UserCard.Sub = function UserCardSub({
  message = null,
  time = null,
  unread = false,
  children,
  ...restProps
}) {
  if (message) {
    let text;
    if (message.length > 20) {
      text = `${message.slice(0, 20).trim()}...`;
    } else {
      text = message;
    }
    return (
      <Sub unread={unread}>
        {text}
        <span style={{ margin: "0 4px" }}>·</span>
        <Time>{time}</Time>
      </Sub>
    );
  } else {
    return <Sub {...restProps}>{children}</Sub>;
  }
};

UserCard.Main = function UserCardMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

UserCard.FollowBtn = function UserCardFollowBtn({ children, ...restProps }) {
  return <FollowBtn {...restProps}>{children}</FollowBtn>;
};

UserCard.Notification = function UserCardNotification() {
  return <Notification />;
};
