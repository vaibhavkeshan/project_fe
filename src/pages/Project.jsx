import React, { useRef, useState, useEffect, useContext } from "react";
import { FaImage } from "react-icons/fa6";
import { RiVideoFill } from "react-icons/ri";
import Build from "../components/model/Build";
import ArtWorkInfo from "../components/model/ArtWorkInfo";
import ArtWorkName from "../components/model/ArtWorkName";
import useModal from "../components/hooks/useModel";
import { UserContext } from "../context/MyContext";
import ArtWorkNameSave from "../components/model/ArtWorkNameSave";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Notify from "../components/model/Notify";
import Swal from "sweetalert2";
import ProjectShare from "../components/model/ProjectShare";
const Project = () => {
  const {
    handleProjectSave,
    setProject,
    project,
    isUpload,
    setImgPreview,
    imgPreview,
    projectEdit,
    setProjectEdit,
    handleProjectSaveEdit,
  } = useContext(UserContext);

  const navigate = useNavigate();
  const {
    open: modal1Open,
    handleOpen: handleOpen1,
    handleClose: handleClose1,
  } = useModal();
  const {
    open: modal2Open,
    handleOpen: handleOpen2,
    handleClose: handleClose2,
  } = useModal();
  const {
    open: modal3Open,
    handleOpen: handleOpen3,
    handleClose: handleClose3,
  } = useModal();
  const {
    open: modal4Open,
    handleOpen: handleOpen4,
    handleClose: handleClose4,
  } = useModal();
  const {
    open: modal6Open,
    handleOpen: handleOpen6,
    handleClose: handleClose6,
  } = useModal();
  const {
    open: modal5Open,
    handleOpen: handleOpen5,
    handleClose: handleClose5,
  } = useModal();
  const [videoPreview, setVideoPreview] = useState(null);
  const [artWorkName, setArtWorkName] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imhHeight, setImgHeight] = useState("");
  const [imgWidth, setImgWidth] = useState("");

  const [isSave, setIsSave] = useState(false);

  const [videoShow, setVideoShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const [bothUpload, setBothUplaod] = useState(false);
  const [resizeTarget, setResizeTarget] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");
  const [videoKey, setVideoKey] = useState(0);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handlePublish = async () => {
    if (artWorkName) {
      const formData = new FormData();
      formData.append("artWorkName", artWorkName);
      formData.append("file2", image);
      formData.append("file1", video);
      formData.append("width", imgWidth);
      formData.append("height", imhHeight);
      formData.append("builder", true);
      formData.append("status", "pending");

      const data = await handleProjectSave(formData);
      if (data?.success) {
        // redirect to server page

        window.location.href = "https://ar-backend-j397.onrender.com/build";
        // window.location.href = "http://localhost:4000/build";
      } else {
        console.log(data);
      }

      // handleOpen3();
    } else {
      handleOpen2();
    }
  };
  const handleSave = async () => {
    if (artWorkName) {
      const formData = new FormData();
      formData.append("artWorkName", artWorkName);
      formData.append("file2", image);
      formData.append("file1", video);
      formData.append("width", imgWidth);
      formData.append("height", imhHeight);
      formData.append("builder", false);
      formData.append("status", "pending");

      const data = await handleProjectSave(formData);
      if (data.success) {
        return navigate("/userdashboard");
      } else {
        console.log(data?.message);
        Swal.fire({
          text: data?.message,
          customClass: {
            validationMessage: "my-validation-message",
          },
        });
      }
      console.log("data", data);
    } else {
      handleOpen4();
    }
  };
  const handleUpdate = async (id) => {
    const formData = new FormData();
    formData.append("artWorkName", artWorkName);
    formData.append("file2", image);
    formData.append("file1", video);
    formData.append("width", imgWidth);
    formData.append("height", imhHeight);
    formData.append("builder", false);
    formData.append("status", "pending");
    formData.append("mindArUpload", false);

    const data = await handleProjectSaveEdit(formData, id);
    if (data?.success) {
      setProjectEdit(null);
      return navigate("/userdashboard");
    } else {
      console.log(data);
    }
  };

  const handleRepublish = async (id) => {
    const formData = new FormData();
    formData.append("artWorkName", artWorkName);
    formData.append("file2", image);
    formData.append("file1", video);
    formData.append("width", imgWidth);
    formData.append("height", imhHeight);
    formData.append("builder", false);
    formData.append("status", "pending");
    formData.append("mindArUpload", false);

    const data = await handleProjectSaveEdit(formData, id);
    if (data?.success) {
      setProjectEdit(null);
      window.location.href = "https://ar-backend-j397.onrender.com/build";
      // window.location.href = "http://localhost:4000/build";
    } else {
      console.log(data);
    }
  };
  useEffect(() => {
    if (imgPreview && videoKey) {
      setBothUplaod(true);
    }
    const handleResize = () => {
      console.log(window.innerWidth < 1300, window.innerWidth);
      return setResizeTarget(window.innerWidth < 1300);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imgPreview, videoKey]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleVideoClick = () => {
    videoInputRef.current.click();
  };
  const handleImageDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith("image/")) {
        handleFileChange(droppedFile);
      } else {
        Swal.fire({
          text: "Please drop a image file!",
          customClass: {
            validationMessage: "my-validation-message",
          },
        });
        // setNotifyMessage("Please drop a image file.");
        // handleOpen5();
        console.log("Please drop a image file.");
      }
    }
  };
  const handleFileChange = async (selectedFile) => {
    if (selectedFile) {
      const maxFileSize = 5242880;
      if (selectedFile.size <= maxFileSize) {
        setImage(selectedFile);
        console.log(URL.createObjectURL(selectedFile));
        setImgPreview(URL.createObjectURL(selectedFile));
        setImageShow(true);
        const img = new Image();
        img.src = URL.createObjectURL(selectedFile);
        img.onload = () => {
          setImgWidth(img.naturalWidth);
          setImgHeight(img.naturalHeight);
          console.log("Image width:", img.naturalWidth);
          console.log("Image height:", img.naturalHeight);
        };
      } else {
        Swal.fire({
          text: "Selected file is too large. Please select a file less than or equal to 5MB.",
          customClass: {
            validationMessage: "my-validation-message",
          },
        });

        // setNotifyMessage(
        //   "Selected file is too large. Please select a file less than or equal to 1MB."
        // );
        // handleOpen5();
        console.log(
          "Selected file is too large. Please select a file less than or equal to 1MB."
        );
      }
    }
  };

  const handleVideoDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type.startsWith("video/")) {
        handleVideoChange(droppedFile);
      } else {
        Swal.fire({
          text: "Please drop a video file.",
          customClass: {
            validationMessage: "my-validation-message",
          },
        });

        // setNotifyMessage("Please drop a video file.");
        // handleOpen5();
        console.log("Please drop a video file.");
      }
    }
  };

  const handleVideoChange = (selectedFile) => {
    if (selectedFile) {
      const maxFileSize = 52428800;
      if (selectedFile.size <= maxFileSize) {
        setVideo(selectedFile);
        const videoURL = URL.createObjectURL(selectedFile);
        console.log(videoURL);
        setVideoPreview(videoURL);
        setVideoShow(true);
        setVideoKey((prevKey) => prevKey + 1);
      } else {
        // setNotifyMessage(
        //   "Selected file is too large. Please select a file less than or equal to 10MB."
        // );
        Swal.fire({
          text: "Selected file is too large. Please select a file less than or equal to 50MB.",
          customClass: {
            validationMessage: "my-validation-message",
          },
        });

        console.log(
          "Selected file is too large. Please select a file less than or equal to 10MB."
        );
        // handleOpen5();
      }
    }
  };

  let lengthMeasure =
    imhHeight >= imgWidth ? "projectSetUpSet" : "projectSetUpSet2";

  useEffect(() => {
    if (projectEdit) {
      setVideoPreview(projectEdit?.content?.url);
      setImgPreview(projectEdit?.target?.url);
      setArtWorkName(projectEdit?.artWorkName);
      setImageShow(true);
      setVideoShow(true);
      setBothUplaod(true);
      lengthMeasure =
        projectEdit?.height >= projectEdit?.width
          ? "projectSetUpSet"
          : "projectSetUpSet2";
    }
  }, [projectEdit]);

  const handleApprovedPending = () => {
    window.location.href = "https://ar-backend-j397.onrender.com/build";
    // window.location.href = "http://localhost:4000/build";
  };
  const handleClear = () => {
    setProjectEdit(null);
    setVideoPreview(null);
    setImgPreview(null);
    setArtWorkName(null);
    setImageShow(false);
    setVideoShow(false);
    setBothUplaod(false);
  };
  return (
    <>
      <div className="profile">
        {isUpload && <Loader />}
        <div className="container-fluid m-0 g-0 p-0">
          <div className="row ">
            <div className="parentWork">
              <div className="work1">
                <div className="sample1">
                  <div className="row mx-2">
                    <input
                      type="text"
                      className="form-control projectNameInput"
                      placeholder="Artwork Name"
                      value={artWorkName}
                      onChange={(e) => setArtWorkName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="work2">
                {projectEdit?.status !== "approved" ? (
                  <button
                    className="btn"
                    disabled={!bothUpload}
                    onClick={() =>
                      projectEdit
                        ? handleUpdate(projectEdit?._id)
                        : handleSave()
                    }
                  >
                    {projectEdit ? "Update" : "Save"}
                  </button>
                ) : (
                  <button className="btn" onClick={() => handleClear()}>
                    Clear
                  </button>
                )}

                <button
                  className="btn"
                  disabled={!bothUpload}
                  onClick={() =>
                    projectEdit
                      ? projectEdit?.status === "pending"
                        ? handleApprovedPending()
                        : projectEdit?.status === "approved" &&
                          handleRepublish(projectEdit?._id)
                      : handlePublish()
                  }
                >
                  {projectEdit?.mindArUpload ? "Republish" : "Publish"}
                </button>
              </div>
            </div>
          </div>

          <div className="mobileView">
            <div
              className="parentUpload"
              // style={{ height: bothUpload && "100%" }}
            >
              <div
                className="upload1"
                // style={{
                //   flexDirection: resizeTarget ? "column" : bothUpload && "row",
                // }}
                onClick={handleClick}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleImageDrop}
              >
                <div className="img1">
                  {imageShow ? (
                    <div className="dynamicHeight">
                      <img
                        src={imgPreview}
                        alt="preview"
                        // height="250"
                        // width="170"
                      />
                    </div>
                  ) : (
                    <FaImage fontSize={90} />
                  )}
                </div>
                <div className="img1 mx-1">
                  <h6>
                    Add <b>image</b> / <b>artwork</b> <br /> to be recognized{" "}
                  </h6>
                </div>
                <div className="img1 mx-2">
                  <button className="btn">
                    {imageShow ? "Change file" : " Select File"}
                  </button>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div
                className="upload2 "
                // style={{
                //   flexDirection: resizeTarget ? "column" : bothUpload && "row",
                // }}
                onClick={handleVideoClick}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleVideoDrop}
              >
                <div className="img1">
                  {videoShow ? (
                    <div className="dynamicHeight">
                      <video
                        key={videoKey}
                        // width="170"
                        // height="250"
                        autoPlay
                        muted
                        loop
                      >
                        <source src={videoPreview} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <RiVideoFill fontSize={90} />
                  )}
                </div>
                <div className="img1 mx-2">
                  <h6>
                    Add <b>Video</b>/ <b>Content</b>
                    <br /> to be recognized{" "}
                  </h6>
                </div>
                <div className="img1">
                  <button className="btn btn-outline-secondary">
                    {videoShow ? "Change file" : " Select File"}
                  </button>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  multiple={false}
                  ref={videoInputRef}
                  onChange={(e) => handleVideoChange(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            {bothUpload && (
              <div className="mobileScreen">
                <div className="buildProject">
                  <div className="projectSetUp" id={lengthMeasure}>
                    {/* <div className="imgDemoPROJECT"> */}
                    <img src={imgPreview} alt="imgPreview" />
                    {/* </div> */}
                    <video key={videoKey} autoPlay muted loop>
                      <source
                        src={videoPreview}
                        type="video/mp4"
                        className="w-set"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* 1 */}
      <Build
        open={modal3Open}
        handleClose={handleClose3}
        handleOpen={handleOpen3}
        imgWidth={imgWidth}
        video={video}
        image={image}
        imhHeight={imhHeight}
        artWorkName={artWorkName}
      />
      <ArtWorkInfo
        open={modal1Open}
        handleClose={handleClose1}
        handleOpen={handleOpen1}
      />
      <ArtWorkName
        setArtWorkName={setArtWorkName}
        artWorkName={artWorkName}
        open={modal2Open}
        handleOpen={handleOpen2}
        handleClose={handleClose2}
        handleOpen3={handleOpen3}
        imgWidth={imgWidth}
        video={video}
        image={image}
        imhHeight={imhHeight}
      />
      <ArtWorkNameSave
        setArtWorkName={setArtWorkName}
        artWorkName={artWorkName}
        open={modal4Open}
        handleOpen={handleOpen4}
        handleClose={handleClose4}
        video={video}
        image={image}
        imgWidth={imgWidth}
        imhHeight={imhHeight}
      />
      <Notify
        message={notifyMessage}
        open={modal5Open}
        handleClose={handleClose5}
      />
      <ProjectShare handleClose1={handleClose6} open1={modal6Open} />
    </>
  );
};

export default Project;
