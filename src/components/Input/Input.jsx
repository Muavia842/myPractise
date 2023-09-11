import React from "react";
import "./Input.css";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { BsMic } from "react-icons/bs";
function Input() {
  return (
    <div className="input_main">
      <MdOutlineEmojiEmotions className="emoji-icon" />
      <ImAttachment className="attach_icon" />
      <div className="form">
        <input type="text" placeholder="write a message" className="msgInput" />
        <button type="submit">
          <MdSend className="msgSend_icon" />
        </button>
      </div>
      <BsMic className="micIcon" />
    </div>
  );
}

export default Input;
