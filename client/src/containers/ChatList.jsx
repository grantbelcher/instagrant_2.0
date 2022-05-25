import React, { useEffect } from "react";
import { UserCard, Banner } from "../components";
import { CaretLeft } from "phosphor-react";

let userInfo = [
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: true,
  },
  {
    avatar: "",
    message: "this is a long long long long message",
    time: "4h",
    name: "Greg",
    unread: true,
  },
  {
    avatar: "",
    message: "this is a long long long long message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: true,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a long long long long message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a long long long long message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Lori Gaccioli Tygerson",
    unread: false,
  },
  {
    avatar: "",
    message: "this is a message",
    time: "4h",
    name: "Greg",
    unread: false,
  },
];

export default function ChatList({ children, ...restProps }) {
  useEffect(() => {
    console.log("yooo", userInfo);
  }, []);
  const elements = userInfo.map((user) => {
    return (
      <UserCard>
        <UserCard.Group>
          <UserCard.Avatar src={user.avatar} />
          <UserCard.Names>
            <UserCard.Handle>{user.handle}</UserCard.Handle>
            {/* <UserCard.Name>{user.name}</UserCard.Name> */}
          </UserCard.Names>
        </UserCard.Group>
        {/* <UserCard.FollowBtn following={user.following}>
          {user.following ? "Following" : "Follow"}
        </UserCard.FollowBtn> */}
      </UserCard>
    );
  });

  return (
    <>
      <Banner>
        <Banner.IconBtn>
          <CaretLeft size={30} />
        </Banner.IconBtn>
        <Banner.Text>Likes</Banner.Text>
        <Banner.RightSpace />
      </Banner>
      <div className="user-list">{elements}</div>
    </>
  );
}
