import React from "react";
import {
  Container,
  Header,
  AvatarContainer,
  Content,
  Info,
  Row,
  Handle,
  FollowBtn,
  EditBtn,
  Canvas,
  Avatar,
  Link,
  Statistic,
  Emphasis,
  MobileStats,
  MobileStatistic,
  Bio,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Profile.Content = function ProfileContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Profile.Row = function ProfileRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Profile.Handle = function ProfileHandle({ children, ...restProps }) {
  return <Handle {...restProps}>{children}</Handle>;
};

Profile.AvatarContainer = function ProfileAvatarContainer({
  children,
  ...restProps
}) {
  return <AvatarContainer {...restProps}>{children}</AvatarContainer>;
};

Profile.Canvas = function ProfileCanvas({ children, ...restProps }) {
  return <Canvas {...restProps}>{children}</Canvas>;
};

Profile.Avatar = function ProfileAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

Profile.Link = function ProfileLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Profile.FollowBtn = function ProfileFollowBtn({ children, ...restProps }) {
  return <FollowBtn {...restProps}>{children}</FollowBtn>;
};
Profile.EditBtn = function ProfileEditBtn({ children, ...restProps }) {
  return <EditBtn {...restProps}>{children}</EditBtn>;
};

Profile.Emphasis = function ProfileEmphasis({ children, ...restProps }) {
  return <Emphasis {...restProps}>{children}</Emphasis>;
};

Profile.Statistic = function ProfileStatistic({ children, ...restProps }) {
  return <Statistic {...restProps}>{children}</Statistic>;
};

Profile.Info = function ProfileInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Profile.MobileStats = function ProfileMobileStats({ children, ...restProps }) {
  return <MobileStats {...restProps}>{children}</MobileStats>;
};

Profile.MobileStatistic = function ProfileMobileStatistic({
  children,
  ...restProps
}) {
  return <MobileStatistic {...restProps}>{children}</MobileStatistic>;
};

Profile.Bio = function ProfileBio({ children, ...restProps }) {
  return <Bio {...restProps}>{children}</Bio>;
};
