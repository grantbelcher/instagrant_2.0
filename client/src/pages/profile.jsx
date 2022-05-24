import React from "react";
import ProfileContainer from "../containers/Profile";
import GridContainer from "../containers/Grid";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <ProfileContainer />
      <GridContainer />
    </div>
  );
}
