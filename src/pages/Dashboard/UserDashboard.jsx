import React, { useState, useContext, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiEye2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

import {
  MdPausePresentation,
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdOutlineSmartDisplay,
} from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import { UserContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
import "../../style/UserDashboard.css";
import { IoBuildOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaPause } from "react-icons/fa6";

import Loader from "../../components/Loader";
import useModal from "../../components/hooks/useModel";
import Build from "../../components/model/Build";
import ProjectShare from "../../components/model/ProjectShare";
import Layout from "../../components/Layout/Layout";

const UserDashboard = () => {
  const { open, handleOpen, handleClose, setOpen, sureStyle } = useModal();
  const {
    open: open1,
    handleOpen: handleOpen1,
    handleClose: handleClose1,
  } = useModal();

  const navigate = useNavigate();
  const {
    isDelete,
    project,
    getAllProjectController,
    isUpdate,
    deleteProject,
    isUserBuild,
    handleEdit,
    setProjectEdit,
    handleProjectSaveEdit,
    handleCreatePayment,
    setIsUpdate,
    handleSubscription,
    user,
  } = useContext(UserContext);
  const videoRef = useRef(null);
  const [projectId, setProjectId] = useState("");
  const [isShow, setIsShow] = useState(null);
  const [isPlayCount, setPlayIsCount] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isPlay, setIsPlay] = useState(null);
  useEffect(() => {
    const fetchProject = async () => {
      await getAllProjectController();
    };
    fetchProject();
  }, [isUpdate]);

  // const togglePlay = async (play, id) => {
  //   const video = videoRef.current;
  //   console.log(play);
  //   if (play) {
  //     video.pause();
  //     video.currentTime = 0;
  //     handleEnded(id);
  //   } else {
  //     video.play();
  //   }
  //   await handleProjectSaveEdit({ isPlay: true }, id);
  //   // setIsPlay(!isPlay);
  // };

  // const handleEnded = async (id) => {
  //   // setIsPlay(false);
  //   await handleProjectSaveEdit({ isPlay: false }, id);

  //   videoRef.current.currentTime = 0;
  // };

  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const videosRefs = useRef([]);

  const handleVideoClick = (index) => {
    const video = videosRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
      setIsPlay(null);
    }
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjectEdit(null);
  };

  const handleUpdate = async (p) => {
    await handleEdit(p);
    navigate("/project");
  };
  const payment = async (p, status) => {
    console.log(p, status);
    // await handleCreatePayment(p);
    // await handleSubscription(p);
    if (status === "create") {
      await handleCreatePayment(p);
    } else if (status === "expired") {
      await handleSubscription(p);
    }
  };
  const handleChecker = () => {
    const data = project?.filter(
      (p, i) => p?.subscriptionId?.status === "active"
    );
    console.log(user);
    // console.log(user?.project_report.length, data?.length + 2);
    if (project?.length >= data?.length + 2) {
      Swal.fire({
        text: "Upgrade your existing free project to create a new project",
        customClass: {
          validationMessage: "my-validation-message",
        },
      });
      return;
    } else {
      navigate("/project");
    }
  };
  return (
    <Layout>
      <div className="row  m-0 p-0 g-0 ">
        {(isDelete || isUserBuild) && <Loader />}

        <div className="projectDashboardMain">
          <div className="row m-0 g-0 p-0">
            <div className="parentWorking">
              {project.map((p, i) => (
                <div className="childWork mx-2 my-1" key={p._id}>
                  <div className="imgVideoWorking">
                    <img alt="" src={p?.target?.url} />
                    <video
                      ref={(el) => (videosRefs.current[i] = el)}
                      src={p?.content?.url}
                      controls={false}
                      id={isPlay === i ? "aboveWork" : "innerWork"}
                    ></video>
                  </div>
                  <div className="row p-1">
                    <div className="artWorkNameWorking">
                      <span>{p.artWorkName}</span>
                    </div>
                    <div className="timeOfProject">
                      <span>
                        <i>{new Date(p.createdAt).toLocaleDateString()} </i>

                        {/* {new Date(p.createdAt).toLocaleTimeString()} */}
                      </span>
                    </div>
                  </div>

                  <div className="playerWorking p-1">
                    <div className="d-flex justify-content-between align-items-center m-0 p-0 g-0">
                      {!p?.subscriptionId?.planId && (
                        <button
                          className="btn upgrade_btnNewUi"
                          onClick={() => payment(p, p?.subscriptionId?.status)}
                        >
                          Upgrade
                        </button>
                      )}

                      <div className="allOtherController">
                        <span
                          className="threeDot"
                          onMouseOver={() => {
                            setIsShow(i);
                            // setIsVisible(!isVisible);
                          }}
                        >
                          {isShow !== i ? (
                            <BsThreeDotsVertical fontSize={26} />
                          ) : (
                            <RxCross2 fontSize={26} />
                          )}
                        </span>
                        {isShow === i && (
                          <div
                            onMouseLeave={() => {
                              setIsShow(null);
                            }}
                            className={`childController ${
                              isShow === i && "activeActionController"
                            }`}
                          >
                            <div
                              className="controllerAction"
                              onClick={() => {
                                setIsPlay(i);
                                handleVideoClick(i);
                              }}
                            >
                              {isPlay !== i ? (
                                <>
                                  <span>Play</span>
                                  <span>
                                    <FaPlay />
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span>Pause</span>
                                  <span>
                                    <FaPause />
                                  </span>
                                </>
                              )}
                            </div>
                            <div
                              className="controllerAction"
                              onClick={() => handleDelete(p._id)}
                            >
                              <span>Delete</span>
                              <span>
                                <MdDelete />
                              </span>
                            </div>

                            {p?.mindArUpload && (
                              <div
                                className="controllerAction"
                                onClick={() => {
                                  setProjectId(p._id);
                                  handleOpen1();
                                }}
                              >
                                <span>View</span>
                                <span>
                                  <RiEye2Fill />
                                </span>
                              </div>
                            )}

                            <div
                              className="controllerAction"
                              onClick={() => handleUpdate(p)}
                            >
                              <span>Edit</span>
                              <span>
                                <AiFillEdit />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mt-2 g-0 p-0">
                      <div className="progressBar">
                        <div className="completedPart"></div>
                      </div>
                      <span className="leftProject">
                        <i>5/3</i>
                      </span>
                    </div>
                    {/* <div className="row m-0 p-0 g-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="iconWorking d-flex justify-content-between align-items-center ">
                          <span onClick={() => togglePlay(p?.isPlay, p?._id)}>
                            {p?.isPlay ? (
                              <MdPausePresentation color="rgb(150, 40, 58)" />
                            ) : (
                              <MdOutlineSmartDisplay color="rgb(150, 40, 58)" />
                            )}
                          </span>
                          <span onClick={() => handleDelete(p._id)}>
                            <MdOutlineDeleteOutline color="rgb(150, 40, 58)" />
                          </span>
                          {p?.mindArUpload && (
                            <span
                              onClick={() => {
                                setProjectId(p._id);
                                handleOpen1();
                              }}
                            >
                              <GrView fontSize={25} color="rgb(150, 40, 58)" />
                            </span>
                          )}

                          <span>
                            <MdOutlineEdit
                              onClick={() => handleUpdate(p)}
                              color="rgb(150, 40, 58)"
                            />
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-start m-0 mx-2 g-0 p-0">
            <div
              className="lowersearch p-0 m-0 my-1"
              onClick={() => {
                setProjectEdit(null);
                handleChecker();
              }}
            >
              <div className="boxlower">
                <div className="icon">
                  <RiAddCircleFill fontSize={30} />
                </div>
                <div className="contenticon my-2">
                  <span>Create New Artwork</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Build open={open} handleClose={handleClose} handleOpen={handleOpen} />
        <ProjectShare
          handleClose1={handleClose1}
          open1={open1}
          projectId={projectId}
        />
      </div>
    </Layout>
  );
};

export default UserDashboard;
