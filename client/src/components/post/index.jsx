import React from "react";
import { DotsThree } from "phosphor-react";

import {
  Container,
  Main,
  Side,
  Banner,
  Header,
  Options,
  OptionsBtn,
  Image,
  Body,
  Icons,
  IconGroup,
  Likes,
  Comments,
  PostedAt,
  Section,
  Input,
  Button,
  Info,
  ProfilePic,
  Location,
  Author,
} from "./styles/post";

// Post.X = function X({ children, ...restProps }) {
//   return <X {...restProps}>{children}</X>;
// };

// Post.Location = function Location({ children, ...restProps }) {
//   return <Location {...restProps}>{children}</Location>;
// };
// Post.AuthorLink = function AuthorLink({ children, ...restProps }) {
//   return <AuthorLink {...restProps}>{children}</AuthorLink>;
// };

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Info = function PostInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Post.ProfilePic = function PostProfilePic({ children, ...restProps }) {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};
Post.Author = function PostAuthor({ children, ...restProps }) {
  return <Author {...restProps}>{children}</Author>;
};

Post.Location = function PostLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Post.Main = function PostMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Post.Side = function PostSide({ children, ...restProps }) {
  return <Side {...restProps}>{children}</Side>;
};

Post.Banner = function PostBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};
Post.Header = function PostHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Post.Options = function PostOptions({ children, ...restProps }) {
  return <Options>{children}</Options>;
};

Post.OptionsBtn = function PostOptionsBtn({ children, ...restProps }) {
  return <OptionsBtn {...restProps}>{children}</OptionsBtn>;
};

Post.Image = function PostImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Post.Body = function PostBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Post.Icons = function PostIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};
Post.IconGroup = function PostIconGroup({ children, ...restProps }) {
  return <IconGroup {...restProps}>{children}</IconGroup>;
};

Post.Likes = function PostLikes({ children, ...restProps }) {
  return <Likes {...restProps}>{children}</Likes>;
};
Post.Comments = function PostComments({ children, ...restProps }) {
  return <Comments {...restProps}>{children}</Comments>;
};

Post.PostedAt = function PostPostedAt({ children, ...restProps }) {
  return <PostedAt {...restProps}>{children}</PostedAt>;
};

Post.NewComment = function PostNewComment({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Post.Input = function PostInput({ children, ...restProps }) {
  return <Input />;
};

Post.Button = function PostButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
