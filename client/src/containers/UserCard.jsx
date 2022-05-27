import React from "react";
import { UserCard } from "../components";

export default function UserCardContainer({ avatar, handle, name, following }) {
  return (
    <UserCard>
      <UserCard.Group>
        <UserCard.Avatar src={avatar} />
        <UserCard.Text>
          <UserCard.Main>{handle}</UserCard.Main>
          <UserCard.Sub>{name}</UserCard.Sub>
        </UserCard.Text>
      </UserCard.Group>
      <UserCard.FollowBtn following={following}>
        {following ? "Following" : "Follow"}
      </UserCard.FollowBtn>
    </UserCard>
  );
}
