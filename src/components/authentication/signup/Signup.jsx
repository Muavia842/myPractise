import React from "react";
import "./Signup.css";
import illustrator from "../../../assets/illustrator1.jpg";

import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  return (
    <div className="image_signup_parrent">
      <div className="image_signup_child">
        <img src={illustrator} alt="illustrator" />
        <div className="signup">
          <h1>Signup</h1>
          <div className="label_input">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter you'r name"
              autoComplete="off"
              requir
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter you'r email"
              autoComplete="off"
              requir
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter you'r password"
              autoComplete="off"
              requir
            />
            <label>c password</label>
            <input
              type="password"
              placeholder="Enter confirm password"
              autoComplete="off"
              requir
            />
          </div>
          <button className="btn" onClick={() => navigate("/chattmain")}>
            Signup
          </button>
          <p>I have an account</p>
          <button className="btn" onClick={() => navigate("/login")}>
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
