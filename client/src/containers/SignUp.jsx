import React from "react";
import { Auth } from "../components";

export default function SignUpContainer() {
  return (
    <Auth>
      <Auth.Logo src="/images/logo.png" />

      <Auth.Form>
        <Auth.Contents>
          <Auth.Banner>Welcome</Auth.Banner>
          <Auth.Input placeholder="Email" />
          <Auth.Input placeholder="Full Name" />
          <Auth.Input placeholder="Username" />

          <Auth.Input placeholder="password" type="password" />

          <Auth.Button>Sign Up</Auth.Button>
          <Auth.TextSmall>
            Already have an account? <Auth.Link>Sign in</Auth.Link>
          </Auth.TextSmall>
        </Auth.Contents>
      </Auth.Form>
    </Auth>
  );
}
