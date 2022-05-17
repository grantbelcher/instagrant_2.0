import React from "react";
import { Post } from "./components";

const App = () => (
  <>
    <div className="post-list">
      <Post>
        <Post.Banner>
          <Post.Header>
            <Post.ProfilePic></Post.ProfilePic>
            <Post.Info>
              <Post.Author>author</Post.Author>
              <Post.Location>location</Post.Location>
            </Post.Info>
          </Post.Header>
          <Post.Options></Post.Options>
        </Post.Banner>
      </Post>
    </div>
  </>
);

export default App;
