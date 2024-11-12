import React from "react";
import { Outlet } from "react-router-dom";
import PrivateLoader from "../components/PrivateLoader";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
export const PrivateAuth = () => {
  const { authenticate } = useContext(UserContext);
  return authenticate ? <PrivateLoader path="/" /> : <Outlet />;
};
