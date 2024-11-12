import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../style/Forgot.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";

const Forget = () => {
  const navigate = useNavigate();
  const { handleForgetPassword, setIsLogin, isLogin } = useContext(UserContext);

  const [email, setEmail] = useState();
  const handleForget = async (e) => {
    e.preventDefault();
    await handleForgetPassword(email);
  };
  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerfor">
        <div className="outerdivfor mx-5 px-4 py-3">
          <span className="headerupperforeg mt-4 mb-5 m-auto">
            Forget Password
          </span>
          <p className="headingpara mt-3">
            Please enter your email address.You will recieve a link to create a
            new password via email.
          </p>
          <form className="row m-0 p-0 g-0" onSubmit={handleForget}>
            <div className="emailogin mb-3">
              <TextField
                label="Email"
                variant="filled"
                className="insidemailog  w-100"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="btn m-auto btnlogin my-2" disabled={isLogin}>
              {isLogin ? "Loading..." : "Send Reset Link"}
            </button>
          </form>
          <button
            className="btn m-auto btnlogin my-2 w-100"
            onClick={() => navigate("/signin")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Forget;
