import React, { useState } from "react";
import { Data } from "../../Data";
import Chat from "../Chat/Chat";
import "./Sidebar.css";

function Sidebar() {
  const [showData, setShowData] = useState(false);

  const handleFirst = () => {
    setShowData(true);
  };

  return (
    <>
      {!showData ? (
        <div className="sidebar_main" onClick={handleFirst}>
          {Data.map((data) => {
            return (
              <div className="userProfile" key={data.id}>
                <img src={data.profileImage} alt="profile" />
                <h1>{data.name}</h1>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {/* <h1>hello muavia</h1> */}
          <Chat />
        </div>
      )}
    </>
  );
}
export default Sidebar;
