import React, { useEffect } from "react";
import { Banner } from "../components";
import UserCard from "./UserCard";
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
  const elements = userInfo.map(({ avatar, handle, name, following }) => {
    return (
      <UserCard
        avatar={avatar}
        handle={handle}
        name={name}
        following={following}
      />
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
