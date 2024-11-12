import React from "react";
import { Link } from "react-router-dom";
import { GiTwirlyFlower } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { RiFocus2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { FaProductHunt, FaRegUser } from "react-icons/fa";
import { MdFormatAlignLeft } from "react-icons/md";
import { SiEsbuild } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaProjectDiagram } from "react-icons/fa";
import useModal from "./hooks/useModel";
import AreYouSure from "./model/AreYouSure";

const AdminSidebar = () => {
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();

  return (
    <nav className="nav__cont">
      <ul className="nav">
        <li className="nav__items">
          <MdDashboard fontSize={20} />

          <Link to="/dashboard/admindashboard">Dashboard</Link>
        </li>
        <li className="nav__items">
          <SiEsbuild fontSize={20} />

          <Link to="/builder">Builder</Link>
        </li>

        <li className="nav__items">
          <FaUserFriends fontSize={20} />

          <Link to="#">Staff</Link>
        </li>
        <li className="nav__items">
          <BsFillPeopleFill fontSize={20} />

          <Link to="/dashboard/user">Users</Link>
        </li>
        <li className="nav__items">
          <FaProjectDiagram fontSize={20} />

          <Link to="/dashboard/project">Projects</Link>
        </li>

        <li className="nav__items">
          <RiFocus2Line fontSize={20} />

          <Link to="#" onClick={handleOpen}>
            Logout
          </Link>
        </li>
      </ul>
      <AreYouSure
        handleClose={handleClose}
        style={sureStyle}
        setOpen={setOpen}
        open={open}
        message="logged Out ?"
      />
    </nav>
  );
};

export default AdminSidebar;
