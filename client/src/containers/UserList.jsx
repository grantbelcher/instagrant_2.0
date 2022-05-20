import React, { useEffect } from "react";
import { UserCard } from "../components";

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

  return <div className="user-list">{elements}</div>;
}
