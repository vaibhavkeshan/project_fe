import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
};

const Instruction = ({ open, handleClose }) => {
  const navigate = useNavigate();
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
              <p>
                You have already created a project. Please complete or close
                your current project before creating a new one.
              </p>
            </div>

            <div className="d-flex justify-content-end align-items-center ">
              <button className="btn btn-dark mx-2" onClick={handleClose}>
                Cancel
              </button>
              <button
                className="btn btn-dark mx-2"
                onClick={() => {
                  handleClose();
                  navigate("/userdashboard");
                }}
              >
                Go To Project
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Instruction;
