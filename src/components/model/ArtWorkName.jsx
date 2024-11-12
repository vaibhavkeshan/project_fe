import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../context/MyContext";
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

const ArtWorkName = ({
  setArtWorkName,
  open,
  handleClose,
  handleOpen,
  artWorkName,
  handleOpen3,
  image,
  video,
  imgWidth,
  imhHeight,
}) => {
  const { handleProjectSave } = useContext(UserContext);
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
      formData.append("builder", true);
      formData.append("status", "pending");

      const data = await handleProjectSave(formData);
      if (data?.success) {
        // redirect to server page
        window.location.href = "https://ar-backend-j397.onrender.com/build";
        // window.location.href = "http://localhost:4000/build";
// testing
        // window.open("http://localhost:4000/build", "_blank");
        // const a = document.createElement("a");
        // a.href = "http://localhost:4000/build";
        // a.target = "_blank";
        // document.body.appendChild(a);
        // a.click();
        // setTimeout(() => {
        //   document.body.removeChild(a);
        // }, 1000);
      } else {
        console.log(data);
      }

      // handleOpen3();
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

export default ArtWorkName;
