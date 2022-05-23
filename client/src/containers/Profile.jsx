import React from "react";
import { Profile } from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function ProfileContainer({ children, ...restProps }) {
  const desktopContent = (
    <>
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
    </>
  );

  const mobileContent = (
    <>
      <Profile.Handle>grant.t.b</Profile.Handle>
      <Profile.FollowBtn>Follow</Profile.FollowBtn>
    </>
  );

  const deviceType = useWindowDimensions();

  return (
    <Profile>
      <Profile.Header>
        <Profile.AvatarContainer>
          <Profile.Canvas>
            <Profile.Avatar />
          </Profile.Canvas>
        </Profile.AvatarContainer>
        <Profile.Content>
          {deviceType === "mobile" ? mobileContent : desktopContent}
        </Profile.Content>
      </Profile.Header>
    </Profile>
  );
}
