import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import illustrator from "../../../assets/illustrator.png";
// import illustrator from "../login/assets/illustrator.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  return (
    <div className="image_login_parrent">
      <div className="image_login_child">
        <img src={illustrator} alt="illustrator" />
        <div className="login">
          <h1>Login</h1>

          <div className="label_input">
            <label>UserName/Email</label>
            <input
              type="email"
              placeholder="Enter you'r email"
              autoComplete="off"
              requir
            />
            <label>Password</label>
            <input
              className="sunny"
              type="password"
              placeholder="Enter you'r password"
              autoComplete="off"
              requir
            />
            <p>Forgot password</p>
          </div>
          <button className="btn" onClick={() => navigate("/chattmain")}>
            LogIn
          </button>
          <div className="social_icons">
            <FcGoogle className="google_icon" />
            <RxLinkedinLogo className="linkdin_icon" />
            <BsFacebook className="facebook_icon" />
          </div>
          <p>I have an account</p>
          <button className="btn" onClick={() => navigate("/signup")}>
            signup
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Login;
