import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  outline: "none",
  transition: "transform 0.3s ease-in-out",
  borderRadius: "20px",
};

const ArtWorkNameSave = ({
  setArtWorkName,
  open,
  handleClose,
  handleOpen,
  artWorkName,
  image,
  video,
  imgWidth,
  imhHeight,
}) => {
  const navigate = useNavigate();

  const { handleProjectSave, project, setProject } = useContext(UserContext);
  const [error, setError] = useState(false);
  const handleSave = async () => {
    if (artWorkName) {
      handleClose();
      const formData = new FormData();
      formData.append("artWorkName", artWorkName);
      formData.append("file2", image);
      formData.append("file1", video);
      formData.append("width", imgWidth);
      formData.append("height", imhHeight);
      formData.append("builder", false);
      formData.append("status", "pending");

      const data = await handleProjectSave(formData);
      console.log("data", data);
      if (data.success) {
        return navigate("/userdashboard");
      } else {
        console.log(data);
      }
    }
    setError(true);
  };
  return (
    <div>
      {" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cssCustomized">
          <div className="container-fluid p-4">
            <div className="row">
              <p>Artwork info</p>
            </div>
            <div className="row text-center p-2">
              <TextField
                error={error}
                id="filled-basic"
                className="w-100"
                label="Artwork Name"
                variant="filled"
                helperText={error && "Enter Artwork name"}
                onChange={(e) => setArtWorkName(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end align-items-center projectNameSaveBtn">
              <button className="btn btn-danger mx-2" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-success " onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ArtWorkNameSave;
