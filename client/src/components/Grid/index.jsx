import React from "react";
import { Container, Select, Option, Row, Post } from "./styles/grid";

export default function Grid({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Grid.Select = function GridSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Grid.Option = function GridOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};

Grid.Row = function GridRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Grid.Post = function GridPost({ children, ...restProps }) {
  return <Post {...restProps}>{children}</Post>;
};
