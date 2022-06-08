import React from "react";
import { Auth } from "../components";

export default function UserInfoContainer({ windowDimensions }) {
  return (
    <Auth windowDimensions={windowDimensions}>
      {/* <Auth.Image
        src="/images/landing-page.png"
        windowDimensions={windowDimensions}
      /> */}
      <Auth.Main windowDimensions={windowDimensions}>
        {/* <Auth.Logo src="/images/logo.png" /> */}
        <Auth.Avatar />
        <Auth.Link>Change Profile Photo</Auth.Link>
        <Auth.Form>
          <Auth.Contents>
            {/* <Auth.Text>Tell Us About Yourself</Auth.Text> */}

            <Auth.TextSmall>User Info</Auth.TextSmall>
            <Auth.Input placeholder="Title" />
            <Auth.Input placeholder="Full Name" />
            <Auth.Input placeholder="Location" />
            <Auth.TextArea placeholder="Bio" />
            <Auth.Button>Update Info</Auth.Button>
          </Auth.Contents>
        </Auth.Form>
      </Auth.Main>
    </Auth>
  );
}
