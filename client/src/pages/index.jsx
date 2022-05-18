import React from "react";
import { Main, Container, Article } from "./post/styles/post";
import {
  Heart,
  ChatCircle,
  PaperPlaneTilt,
  BookmarkSimple,
  DotsThree,
} from "phosphor-react";

import { Post } from "../components";
export default function PostPage({ children, ...restProps }) {
  return (
    <Main {...restProps}>
      <Container>
        <Article>
          <Post.Main>
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
          </Post.Side>
        </Article>
      </Container>
    </Main>
  );
}
