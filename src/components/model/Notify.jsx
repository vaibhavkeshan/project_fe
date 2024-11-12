import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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

const Notify = ({ open, handleClose, message }) => {
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
              <p>{message}</p>
            </div>

            <div className="d-flex justify-content-end align-items-center ">
              <button className="btn btn-dark mx-2" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Notify;
