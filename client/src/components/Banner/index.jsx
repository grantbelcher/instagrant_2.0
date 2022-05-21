import React from "react";
import { Container, Text, IconBtn, RightSpace } from "./styles/Banner";

export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Text = function BannerText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};

Banner.IconBtn = function ({ children, ...restProps }) {
  return <IconBtn {...restProps}>{children}</IconBtn>;
};

Banner.RightSpace = function BannerRightSpace({ ...restProps }) {
  return <RightSpace {...restProps} />;
};
