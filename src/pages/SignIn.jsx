import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "../style/SignIn.css";
import axios from "axios";

import { UserContext } from "../context/MyContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { setAuthenticate, setUser, setIsLogin, isLogin, setIsAdmin } =
    useContext(UserContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isError, setIsError] = useState(false);
  const [customError, setCustomError] = useState("");
  const handleLogion = async (e) => {
    e.preventDefault();
    setIsError(false);

    setEmailError("");
    setPasswordError("");
    setCustomError("");
    if (!email) {
      setIsError(true);
      setEmailError("email is necessary");
      return;
    }
    if (!password) {
      setIsError(true);
      setPasswordError("password is necessary");
      return;
    }
    setIsLogin(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/login`,

        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        // success
        console.log(res?.data?.token);
        window.localStorage.setItem("token", res?.data?.token);

        setIsLogin(false);

        console.log(res.data, "login");
        setUser(res?.data?.user);

        setAuthenticate(res?.data?.success);
        if (res?.data?.user.role === "admin") {
          setIsAdmin(true);
        }
        if (res?.data?.user.role === "user") {
          return navigate("/userdashboard");
        } else {
          return navigate("/builder");
        }
      } else {
        //  error
        setIsLogin(false);

        console.log("error");
      }
    } catch (error) {
      console.log(error);
      setCustomError(error?.response?.data?.message);

      setIsLogin(false);
    }
  };
  return (
    <>
      <div className="row py-5 bg-light px-2 logoUp">
        <h4 onClick={() => navigate("/")}>Godspeed</h4>
      </div>
      <div className="outerSignin">
        <div className="logUpper">
          <video
            id="videoElement-1"
            src="https://fast.artivive.com/assets/uploads/2022/03/debadc9efc030d2093a265d50ccb0fd5.mp4"
            playsinline="true"
            autoplay="autoplay"
            loop="true"
            muted
            class="outerdivlogin"
          ></video>
        </div>
        <div className="outerdivlog mx-5 px-4">
          <span className="headerupperlogin">Welcome to Godspeed!</span>
          <form className="row m-0 p-0 g-0" onSubmit={handleLogion}>
            <div className="emailogin">
              <TextField
                label="Email"
                error={isError}
                type="email"
                helperText={isError && emailError}
                variant="filled"
                className="insidemailog w-100"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="passwordlogin my-2">
              <TextField
                id="filled-multiline-flexible"
                label="Password"
                variant="filled"
                type="password"
                error={isError}
                helperText={
                  (isError || customError) && (passwordError || customError)
                }
                className="insidepasslog w-100"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span
              className="forgotlogin"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
            <button disabled={isLogin} className="btn m-auto btnlogin my-2">
              {isLogin ? "Loading..." : "Login"}
            </button>
            <div className="signuplog ">
              <span onClick={() => navigate("/register")}> Register here</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
