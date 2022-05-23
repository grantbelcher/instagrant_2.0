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
        <Profile.Content>
          <Profile.Row>
            <Profile.Handle>grant.t.b</Profile.Handle>
            <Profile.EditBtn>Edit Profile</Profile.EditBtn>
          </Profile.Row>
          <Profile.Row>
            <Profile.Statistic>
              <Profile.Emphasis>26</Profile.Emphasis> posts
            </Profile.Statistic>
            <Profile.Statistic>
              <Profile.Emphasis>252</Profile.Emphasis> followers
            </Profile.Statistic>
            <Profile.Statistic>
              <Profile.Emphasis>366</Profile.Emphasis> following
            </Profile.Statistic>
          </Profile.Row>
          <Profile.Info>
            <Profile.Emphasis>Greg Tigersin Blecker</Profile.Emphasis>
            <Profile.Statistic>San Rafael, California</Profile.Statistic>
            <Profile.Statistic>
              You miss 100% of the shots you dont take
            </Profile.Statistic>
          </Profile.Info>
        </Profile.Content>
      </Profile.Header>
    </Profile>
  );
}

// MOBILE INFO children
{
  /* <Profile.Handle>grant.t.b</Profile.Handle>
<Profile.FollowBtn>Follow</Profile.FollowBtn> */
}
