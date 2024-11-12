import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { UserContext } from "../../context/MyContext";
import { useContext } from "react";

const AreYouSure = ({ open, handleClose, style, message = "delete" }) => {
  const { loLogOut } = useContext(UserContext);
  const handleLogout = async () => {
    await loLogOut();
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
          <div className="row textMessageAreYouSure">
            <h5>
              <b>Are you sure you want to {message}</b>
            </h5>
          </div>
          <div className="row my-2">
            <div className="col-sm-6 marginMobileBtn work2">
              <button className="w-100 btn" onClick={handleLogout}>
                Yes
              </button>
            </div>
            <div className="col-sm-6 work2">
              <button className="w-100 btn " onClick={handleClose}>
                No
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AreYouSure;
