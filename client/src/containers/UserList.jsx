import React, { useEffect } from "react";
import { UserCard, Banner } from "../components";
import { CaretLeft } from "phosphor-react";

let userInfo = [
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
  {
    avatar: "",
    handle: "ramesjivers69",
    name: "Lori Gaccioli Tygerson",
    following: false,
  },
  {
    avatar: "",
    handle: "gregbelch69",
    name: "Greg",
    following: true,
  },
];

export default function UserList({ children, ...restProps }) {
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
            <UserCard.Name>{user.name}</UserCard.Name>
          </UserCard.Names>
        </UserCard.Group>
        <UserCard.FollowBtn following={user.following}>
          {user.following ? "Following" : "Follow"}
        </UserCard.FollowBtn>
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
