import {
  Container,
  Header,
  AvatarContainer,
  Info,
  Row,
  Handle,
  FollowBtn,
  Canvas,
  Avatar,
  Link,
  FollowBtn,
  Statistic,
  Bio,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>container</Container>;
}

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Profile.Info = function ProfileInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
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
Profile.Statistic = function ProfileStatistic({ children, ...restProps }) {
  return <Statistic {...restProps}>{children}</Statistic>;
};

Profile.Bio = function ProfileBio({ children, ...restProps }) {
  return <Bio {...restProps}>{children}</Bio>;
};
