import React from "react";
import Chat from "../Chat/Chat";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./chattmain.css";
function ChattMain() {
  return (
    <div>
      <Navbar />
      <div className="sidebar_chat">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default ChattMain;
