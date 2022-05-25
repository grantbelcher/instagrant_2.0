import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SignInContainer from "../containers/SignIn";
import SignUpContainer from "../containers/SignUp";

export default function AuthPage() {
  const windowDimensions = useWindowDimensions();
  return (
    <>
      <SignInContainer windowDimensions={windowDimensions} />
    </>
  );
}
