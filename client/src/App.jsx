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
              <Post.Author>destinationhiking</Post.Author>
              <Post.Location>
                Havasu Falls, Supai, AZ - Grand Canyon
              </Post.Location>
            </Post.Info>
          </Post.Header>
          <Post.Options>
            <Post.OptionsBtn></Post.OptionsBtn>
          </Post.Options>
        </Post.Banner>
        <Post.Image src="/images/hood.jpg" alt="falls" />
      </Post>
    </div>
  </>
);

export default App;
