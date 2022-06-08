import React from "react";
import { Auth } from "../components";

export default function UserInfoContainer({ windowDimensions }) {
  return (
    <Auth windowDimensions={windowDimensions}>
      <Auth.Image
        src="/images/landing-page.png"
        windowDimensions={windowDimensions}
      />
      <Auth.Main windowDimensions={windowDimensions}>
        <Auth.Logo src="/images/logo.png" />

        <Auth.Form>
          <Auth.Contents>
            <Auth.Banner>Welcome</Auth.Banner>
            <Auth.Text>Tell Us About Yourself</Auth.Text>

            <Auth.Input placeholder="Title" />
            <Auth.Input placeholder="Full Name" />
            <Auth.TextArea placeholder="Bio" />
            <Auth.Button>Create Account</Auth.Button>
          </Auth.Contents>
        </Auth.Form>
      </Auth.Main>
    </Auth>
  );
}
