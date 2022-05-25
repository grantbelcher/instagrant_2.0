import React from "react";

import {
  Container,
  Logo,
  Form,
  Contents,
  Banner,
  Decoration,
  BannerText,
  Input,
  Button,
  Text,
  TextSmall,
  Link,
} from "./styles/auth";

export default function Auth({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Auth.Logo = function AuthLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Auth.Form = function AuthForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Auth.Contents = function AuthContent({ children, ...restProps }) {
  return <Contents {...restProps}>{children}</Contents>;
};

Auth.Banner = function AuthBanner({ children, ...restProps }) {
  return (
    <Banner {...restProps}>
      <Decoration />
      <BannerText>{children}</BannerText>
      <Decoration />
    </Banner>
  );
};

Auth.Input = function AuthInput({ children, placeholder, ...restProps }) {
  return <Input {...restProps} placeholder={placeholder} />;
};

Auth.Button = function AuthButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Auth.Text = function AuthText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Auth.TextSmall = function AuthTextSmall({ children, ...restProps }) {
  return <TextSmall>{children}</TextSmall>;
};

Auth.Link = function AuthLink({ children, ...restProps }) {
  return <Link>{children}</Link>;
};
