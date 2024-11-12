import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { UserContext } from "../../context/MyContext";
const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div id="mainHeader9" className="">
        <div>
          <input
            type="text"
            className="form-control projectNameInput"
            placeholder="Search"
          />
        </div>

        <div className="wrapperatMobileViewHeader">
          <ul
            id="atMobileViewHeader"
            className="w-100  secondNavbar d-flex justify-content-center align-items-center"
          >
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="#">
                <MdEmail fontSize={25} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link secondHeaderIcon" to="#">
                <BsBellFill fontSize={20} />
              </NavLink>
            </li>

            <li className="nav-item">
              <div className="ProfilePicComponentsImg d-flex">
                <div className="pic1Navbar mx-1">
                  <img
                    src={
                      user?.avatar?.url
                        ? user?.avatar?.url
                        : "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                    }
                    height="30"
                    width="30"
                    alt="profilePic"
                  />
                </div>
                <div>
                  <b>{user?.name}</b>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
