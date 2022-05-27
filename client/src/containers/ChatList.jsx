import React, { useEffect } from "react";
import { UserCard, Banner } from "../components";
import { CaretLeft } from "phosphor-react";
import ChatCard from "./ChatCard";

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
  const elements = userInfo.map(({ avatar, name, message, unread, time }) => {
    return (
      <ChatCard
        avatar={avatar}
        name={name}
        message={message}
        unread={unread}
        time={time}
      />
    );
  });

  return (
    <>
      <Banner>
        <Banner.IconBtn>
          <CaretLeft size={30} />
        </Banner.IconBtn>
        <Banner.Text>Messages</Banner.Text>
        <Banner.RightSpace />
      </Banner>
      <div className="user-list">{elements}</div>
    </>
  );
}
