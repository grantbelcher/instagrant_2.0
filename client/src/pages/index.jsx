import React from "react";
import { Main, Container, Article } from "./post/styles/post";

import PostContainer from "../containers/post";
import PostDesktop from "../containers/postDesktop";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function PostPage({ children, ...restProps }) {
  const windowDimensions = useWindowDimensions();

  const desktopPage = (
    <Container>
      <Article>
        <PostDesktop windowDimensions={windowDimensions} />
      </Article>
    </Container>
  );

  const mobilePage = <PostContainer windowDimensions={windowDimensions} />;

  return (
    <Main {...restProps}>
      {windowDimensions === "desktop" ? desktopPage : mobilePage}
    </Main>
  );
}

{
  /* <Post.Main>
            <Post.Image fullHeight={true} src="/images/hood.jpg" alt="falls" />
          </Post.Main>
          <Post.Side>
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
            <Comments />
            <Post.Body>
              <Post.Icons>
                <Post.IconGroup>
                  <Post.IconBtn>
                    <Heart size={30} />
                  </Post.IconBtn>
                  <Post.IconBtn>
                    <ChatCircle size={30} />
                  </Post.IconBtn>
                  <Post.IconBtn>
                    <PaperPlaneTilt size={30} />
                  </Post.IconBtn>
                </Post.IconGroup>
                <Post.IconGroup>
                  <Post.IconBtn>
                    <BookmarkSimple size={30} />
                  </Post.IconBtn>
                </Post.IconGroup>
              </Post.Icons>
              <Post.Likes>37955 likes</Post.Likes>

              <Post.PostedAt>4 hours ago</Post.PostedAt>
            </Post.Body>
            <Post.NewComment>
              <Post.IconBtn>
                <Smiley size={30} />
              </Post.IconBtn>

              <Post.Input placeholder="Add a comment..." />
              <Post.Submit>Post</Post.Submit>
            </Post.NewComment>
          </Post.Side> */
}
