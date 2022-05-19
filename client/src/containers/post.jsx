import React from "react";
import { Post } from "../components";
import {
  Heart,
  ChatCircle,
  PaperPlaneTilt,
  BookmarkSimple,
  DotsThree,
} from "phosphor-react";

export default function PostContainer({ windowDimensions }) {
  return (
    <>
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

        <Post.Body deviceType={windowDimensions}>
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
          <Post.Caption>
            <a className="handle">grantb69</a> Round 4 of the Sydney Surf Pro
            Longboard is on and @harrisonsan has hit the water....{" "}
            <a className="expand">more</a>
          </Post.Caption>
          <Post.Comments>View all 21 comments</Post.Comments>
          <Post.PostedAt>4 hours ago</Post.PostedAt>
        </Post.Body>
      </Post>
    </>
  );
}

{
  /* <Post>
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
      <Heart size={30} />
      <ChatCircle size={30} />
      <PaperPlaneTilt size={30} />
    </Post.IconGroup>
    <Post.IconGroup>
      <BookmarkSimple size={30} />
    </Post.IconGroup>
  </Post.Icons>
  <Post.Likes>37955 likes</Post.Likes>
  <Post.Caption>
    <a className="handle">grantb69</a> Round 4 of the Sydney Surf Pro
    Longboard is on and @harrisonsan has hit the water....{" "}
    <a className="expand">more</a>
  </Post.Caption>
  <Post.Comments>View all 21 comments</Post.Comments>
  <Post.PostedAt>4 hours ago</Post.PostedAt>
  <Post.NewComment>
    <Post.Input />
    <Post.Submit>Post</Post.Submit>
  </Post.NewComment>
</Post.Body>
</Post> */
}
