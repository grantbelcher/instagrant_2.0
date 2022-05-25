import React from "react";
import { Auth } from "../components";

export default function SignInContainer() {
  return (
    <Auth>
      <Auth.Logo src="/images/logo.png" alt="logo" page={"sign-in"} />

      <Auth.Form>
        <Auth.Contents>
          <Auth.Banner>Welcome</Auth.Banner>
          <Auth.Text>Sign in to see photos from your friends</Auth.Text>
          <Auth.Input placeholder="username or email" page={"sign-in"} />
          <Auth.Input placeholder="password" type="password" page={"sign-in"} />

          <Auth.Button>Log In</Auth.Button>
          <Auth.TextSmall>
            Don't have an account? <Auth.Link>Sign up</Auth.Link>
          </Auth.TextSmall>
        </Auth.Contents>
      </Auth.Form>
    </Auth>
  );
}
