import { NavLink } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { IoHomeSharp, IoHelpCircle } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { RiLogoutCircleRFill } from "react-icons/ri";
import useModal from "../hooks/useModel";
import AreYouSure from "../model/AreYouSure";
import { useMediaQuery } from "react-responsive";

const routes = [
  {
    path: "/project",
    name: "Create Project",
    icon: <MdCreateNewFolder />,
  },
  {
    path: "/userdashboard",
    name: "Project",
    icon: <IoHomeSharp />,
  },
  // {
  //   path: "/dashboard",
  //   name: "Profile",
  //   icon: <FaUserCircle />,
  // },
  {
    path: "/profilesetting",
    name: "Update Profile",
    icon: <IoSettings />,
  },

  {
    path: "/article",
    name: "Help",
    icon: <IoHelpCircle />,
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  const isMobile = useMediaQuery({ maxWidth: 563 });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "240px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Artify
                </motion.h1>
              )}
            </AnimatePresence>
            {!isMobile && (
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            )}
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (
                // route.subRoutes
                false
              ) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="actives"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}

            <NavLink
              to="#"
              className="link"
              activeClassName="actives"
              onClick={handleOpen}
            >
              <div className="icon">
                <RiLogoutCircleRFill />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    Logout
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          </section>
        </motion.div>
      </div>
      <AreYouSure
        handleClose={handleClose}
        style={sureStyle}
        setOpen={setOpen}
        open={open}
        message="logged Out ?"
      />
    </>
  );
};

export default Sidebar;
