import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="componentDistributeInSidebarAndChildren">
        <div className="sidebarComponents">
          <Sidebar />
        </div>
        <div className="restComponentsWrapper row g-0 p-0 m-0 w-100">
          <div className="navbarComponents">
            <Navbar />
          </div>
          <div className="restComponents">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
