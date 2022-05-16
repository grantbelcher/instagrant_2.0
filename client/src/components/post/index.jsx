import React from "react";
import {
  Container,
  Main,
  Side,
  Banner,
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
} from "./styles/post";

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Main = function PostMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Post.Side = function PostSide({ children, ...restProps }) {
  return <Side {...restProps}>{children}</Side>;
};

Post.Banner = function PostBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
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
