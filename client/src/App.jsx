import React from "react";
import PostPage from "./pages";
import useWindowDimensions from "./hooks/useWindowDimensions";

const App = () => {
  const windowDimensions = useWindowDimensions();
  console.log(windowDimensions, "yoo");
  console.log("rerender");
  return (
    <>
      <PostPage />
    </>
  );
};

export default App;
