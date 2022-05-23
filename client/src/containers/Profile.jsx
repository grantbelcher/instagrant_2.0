import React from "react";
import { Profile } from "../components";
// Container,
// Header,
// AvatarContainer,
// Info,
// Row,
// Handle,
// FollowBtn,
// Canvas,
// Avatar,
// Link,
// FollowBtn,
// Statistic,
// Bio,
export default function ProfileContainer({ children, ...restProps }) {
  return (
    <Profile>
      <Profile.Header>
        <Profile.AvatarContainer>
          <Profile.Canvas>
            <Profile.Avatar />
          </Profile.Canvas>
        </Profile.AvatarContainer>
        <Profile.Info>
          <Profile.Row>
            <Profile.Handle>grant.t.b</Profile.Handle>
            <Profile.FollowBtn>Follow</Profile.FollowBtn>
          </Profile.Row>
          {/* <Profile.Row>
            <Profile.Handle>grant.t.b</Profile.Handle>
            <Profile.FollowBtn>Follow</Profile.FollowBtn>
          </Profile.Row> */}
        </Profile.Info>
      </Profile.Header>
    </Profile>
  );
}
