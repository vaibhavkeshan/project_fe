import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../style/Forgot.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { handleResetPassword, setIsLogin, isLogin } = useContext(UserContext);
  const [password, setPassword] = useState();
  const handleReset = async (e) => {
    e.preventDefault();
    await handleResetPassword(password, token);
  };
  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerfor">
        <div className="outerdivfor mx-5 px-4 py-3">
          <span className="headerupperforeg mt-4 mb-5 m-auto">
            Reset Password
          </span>
          <p className="headingpara mt-3">Please enter your password</p>
          <form className="row m-0 p-0 g-0" onClick={handleReset}>
            <div className="emailogin mb-3">
              <TextField
                label="Password"
                variant="filled"
                className="insidemailog  w-100"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn m-auto btnlogin my-2" disabled={isLogin}>
              {isLogin ? "Loading..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
