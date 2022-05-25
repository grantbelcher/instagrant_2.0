import React from "react";
import { UserCard } from "../components";

export default function ChatCard({ name, message, unread, time }) {
  return (
    <UserCard>
      <UserCard.Group>
        <UserCard.Avatar />
        <UserCard.Text>
          <UserCard.Main unread={unread}>{name}</UserCard.Main>
          <UserCard.Sub unread={unread}>
            {message} <UserCard.Time>{time}</UserCard.Time>
          </UserCard.Sub>
        </UserCard.Text>
      </UserCard.Group>
      {unread ? <UserCard.Notification /> : null}
    </UserCard>
  );
}
