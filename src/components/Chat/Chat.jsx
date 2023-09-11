import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import ReceiveMessage from "../ReceiveMessage/ReceiveMessage";
import SendMessage from "../SendMessage/SendMessage";
import "./chat.css";
function Chat() {
  const [className, setClassName] = useState("hidden");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 425) {
        setClassName("visible");
      } else {
        setClassName("hidden");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="chat_main">
    <div className={`chat_main ${className}`}>
      <div className="user_messages">
        <ReceiveMessage />
        <SendMessage />
        <ReceiveMessage />
        <SendMessage />
        <ReceiveMessage />
        <SendMessage />
        <ReceiveMessage />
        <SendMessage />
        <ReceiveMessage />
        <SendMessage />
        <ReceiveMessage />
        <SendMessage />
      </div>
      <div className="input">
        <Input />
      </div>
    </div>
  );
}

export default Chat;
