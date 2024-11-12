import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
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

const ArtWorkInfo = ({ open, handleClose, handleOpen }) => {
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
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  className="w-100"
                  label="Artist Name"
                  variant="filled"
                />
              </div>
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  label="Artist Name"
                  className="w-100"
                  variant="filled"
                />
              </div>
            </div>

            <div className="row text-center p-2">
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  className="w-100"
                  label="Artwork Name"
                  variant="filled"
                />
              </div>
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  label="Facebook"
                  className="w-100"
                  variant="filled"
                />
              </div>
            </div>

            <div className="row text-center p-2">
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  className="w-100"
                  label="Instagram"
                  variant="filled"
                />
              </div>
              <div className="col-md-6 p-1 g-0 m-0">
                <TextField
                  id="filled-basic"
                  label="Twitter"
                  className="w-100"
                  variant="filled"
                />
              </div>
            </div>

            <div className="row text-center p-2">
              <TextField
                id="filled-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                variant="filled"
              />
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <button className="btn btn-danger mx-2" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-success ">Save</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ArtWorkInfo;
