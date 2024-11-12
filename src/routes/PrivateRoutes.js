import React from "react";
import { Outlet } from "react-router-dom";
import PrivateLoader from "../components/PrivateLoader";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
export const PrivateRoute = () => {
  const { authenticate } = useContext(UserContext);
  return authenticate ? <Outlet /> : <PrivateLoader path="/signin" />;
};
