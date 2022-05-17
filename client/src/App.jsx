import React from "react";
import { Post } from "./components";
import {
  Heart,
  ChatCircle,
  PaperPlaneTilt,
  BookmarkSimple,
  DotsThree,
} from "phosphor-react";

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
            <Post.OptionsBtn>
              <DotsThree size={32} />
            </Post.OptionsBtn>
          </Post.Options>
        </Post.Banner>
        <Post.Image src="/images/hood.jpg" alt="falls" />
        <Post.Body>
          <Post.Icons>
            <Post.IconGroup>
              <Post.Options>
                <Post.OptionsBtn>
                  <Heart size={30} />
                </Post.OptionsBtn>
              </Post.Options>
              <Post.Options>
                <Post.OptionsBtn>
                  <ChatCircle size={30} />
                </Post.OptionsBtn>
              </Post.Options>
              <Post.Options>
                <Post.OptionsBtn>
                  <PaperPlaneTilt size={30} />
                </Post.OptionsBtn>
              </Post.Options>
            </Post.IconGroup>
            <Post.IconGroup>
              <Post.Options>
                <Post.OptionsBtn>
                  <BookmarkSimple size={30} />
                </Post.OptionsBtn>
              </Post.Options>
            </Post.IconGroup>
          </Post.Icons>
        </Post.Body>
      </Post>
    </div>
  </>
);

export default App;
