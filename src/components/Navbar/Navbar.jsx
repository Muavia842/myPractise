import React from "react";
import "./Navbar.css";
import comrexlogo from "../../assets/comrexlogoblack.png";
import Search from "../Search/Search";
import { FaUsers } from "react-icons/fa";
import { MdOutlineMotionPhotosOn, MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar_main">
      <div className="navbar_logo_search">
        <img src={comrexlogo} alt="logo" />
        <Search />
      </div>
      <div className="authentication">
        <AiOutlineSearch className="search_icon" />
        <FaUsers className="icon" />
        <MdOutlineMotionPhotosOn className="icon" />
        <MdMessage className="icon" />
        <BsThreeDotsVertical className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
