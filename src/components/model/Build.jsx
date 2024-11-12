import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProjectShare from "./ProjectShare";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/MyContext";
import { useContext } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  transition: "transform 0.3s ease-in-out",
};

const Build = ({
  open,
  handleClose,
  artWorkName,
  imhHeight,
  imgWidth,
  video,
  image,
}) => {
  const navigate = useNavigate();

  const { handleProjectSave } = useContext(UserContext);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [isserver, setIsServer] = useState(false);
  const handleBuild = async () => {
    const formData = new FormData();
    formData.append("artWorkName", artWorkName);
    formData.append("file2", image);
    formData.append("file1", video);
    formData.append("width", imgWidth);
    formData.append("height", imhHeight);
    formData.append("builder", true);
    formData.append("status", "pending");

    const data = await handleProjectSave(formData);
    if (data.success) {
      setIsServer(true);
      // window.location.href = "http://localhost:4000/build";
      window.location.href = "https://project-be-z867.onrender.com/build";

      // return navigate("/userdashboard");
    } else {
      setIsServer(false);
      console.log(data);
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cssCustomized">
          <div className="container-fluid m-0 p-0 g-0">
            <div className="cross px-2 bg-danger d-flex  justify-content-between align-items-center">
              <p>Publish</p>
              <p className="closedThis" onClick={handleClose}>
                X
              </p>
            </div>
            <div className="my-2 p-3 g-0">
              <button className="btn btn-danger w-25" onClick={handleBuild}>
                Save
              </button>

              {/* <iframe
                title="Embedded Website"
                src="https://project-be-z867.onrender.com/build"
                // src="http://localhost:4000/build"
                style={{ width: "100%", height: "200px" }}
                frameborder="0"
              ></iframe> */}

              {/* <div className="tableSet mt-2">
                <table class="table table-secondary table-hover">
                  <thead>
                    <tr>
                      <th scope="col">version</th>
                      <th scope="col">Size</th>
                      <th scope="col">Build Time</th>
                      <th scope="col">Preview</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>2.5 MB</td>
                      <td>a few second ago</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={handleOpen1}
                        >
                          Preview
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger">Release</button>
                        <button className="btn btn-secondary mx-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
            </div>
          </div>
        </Box>
      </Modal>
      <ProjectShare
        handleOpen1={handleOpen1}
        handleClose1={handleClose1}
        open1={open1}
        imgPreview={"imgPreview"}
      />
    </div>
  );
};

export default Build;
