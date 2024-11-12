import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeSharp, IoHelpCircle } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";

import useModal from "./hooks/useModel";
import AreYouSure from "./model/AreYouSure";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";
import Instruction from "./model/Instruction";
const Header = () => {
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();
  const {
    open: open1,
    handleClose: handleClose1,
    handleOpen: handleOpen1,
  } = useModal();

  const { project, authenticate } = useContext(UserContext);
  return (
    <>
      <div id="mainHeader3" className="px-2">
        <div>
          <NavLink className="artify">ARTIFY</NavLink>
        </div>

        <div>
          <ul
            id="atMobileViewHeader"
            className="w-100  d-flex justify-content-end align-items-center"
          >
            <li className="nav-item ">
              <NavLink
                className="nav-link secondHeaderIcon"
                to="/userdashboard"
                exact
              >
                <IoHomeSharp fontSize={25} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/project">
                <MdCreateNewFolder fontSize={30} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/article">
                <IoHelpCircle fontSize={30} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="/dashboard">
                <FaUserCircle fontSize={25} />
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleOpen}>
              <NavLink className="nav-link secondHeaderIcon" to="#">
                <RiLogoutCircleRFill fontSize={25} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <AreYouSure
        handleClose={handleClose}
        style={sureStyle}
        setOpen={setOpen}
        open={open}
        message="logged Out ?"
      />
      {/* <Instruction handleClose={handleClose1} open={open1} /> */}
    </>
  );
};

export default Header;
