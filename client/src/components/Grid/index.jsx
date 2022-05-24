import React from "react";
import { Container, Select, Option } from "./styles/grid";

export default function Grid({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Grid.Select = function GridSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Grid.Option = function GridOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};
