import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SignInContainer from "../containers/SignIn";
import SignUpContainer from "../containers/SignUp";
import UserInfoContainer from "../containers/UserInfo";

export default function AuthPage() {
  const windowDimensions = useWindowDimensions();
  return (
    <>
      <UserInfoContainer windowDimensions={windowDimensions} />
    </>
  );
}
