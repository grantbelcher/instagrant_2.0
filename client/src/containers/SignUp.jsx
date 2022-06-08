import React from "react";
import { Auth } from "../components";

export default function SignUpContainer({ windowDimensions }) {
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
            <Auth.Text>Sign up to see photos from your friends</Auth.Text>

            <Auth.Input placeholder="Email" />
            <Auth.Input placeholder="Username" />
            <Auth.Input placeholder="password" type="password" />
            <Auth.Input placeholder="confirm password" type="password" />

            <Auth.Button>Sign Up</Auth.Button>
            <Auth.TextSmall>
              Already have an account? <Auth.Link>Sign in</Auth.Link>
            </Auth.TextSmall>
          </Auth.Contents>
        </Auth.Form>
      </Auth.Main>
    </Auth>
  );
}
