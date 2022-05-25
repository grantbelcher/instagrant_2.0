import React from "react";
import { Auth } from "../components";

export default function SignInContainer() {
  return (
    <Auth>
      <Auth.Logo src="/images/logo.png" />

      <Auth.Form>
        <Auth.Contents>
          <Auth.Banner>Log In</Auth.Banner>
          <Auth.Input placeholder="username or email" />
          <Auth.Input placeholder="password" type="password" />

          <Auth.Button>Log In</Auth.Button>
          <Auth.TextSmall>
            Don't have an account? <Auth.Link>Sign up</Auth.Link>
          </Auth.TextSmall>
        </Auth.Contents>
      </Auth.Form>
    </Auth>
  );
}
