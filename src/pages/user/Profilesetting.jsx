import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { SlPencil } from "react-icons/sl";
import { useContext } from "react";
import { UserContext } from "../../context/MyContext";

import Loader from "../../components/Loader";
import Layout from "../../components/Layout/Layout";

const Profilesetting = () => {
  const {
    isProfileUpload,
    authenticate,
    user,
    updateProfilePic,
    updateProfile,
  } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  );

  const inputFileRef = useRef(null);
  useEffect(() => {
    if (user) {
      setName(user?.name || "");
      setEmail(user?.email || "");
      if (user?.avatar?.url) {
        setProfilePic(user?.avatar?.url || "");
        console.log("useeffect", user?.avatar?.url);
      }
    }
  }, [user]);
  const handleFileChange = async (e) => {
    const formData = new FormData();

    const file = e.target.files[0];
    console.log("File uploaded:", file);
    if (file) {
      if (file.type.startsWith("image/") && file.size <= 1024 * 1024) {
        console.log("Image file selected:", file);
        setProfilePic(URL.createObjectURL(file));
        formData.append("file", file);
        await updateProfilePic(formData);

        console.log(formData, "******");
      } else {
        console.error("Please select a valid image file (size <= 1 MB).");
      }
    }
  };

  const handlePencilClick = () => {
    inputFileRef.current.click();
  };

  const handleUpdate = async () => {
    if (!name || !email) {
      return;
    }

    await updateProfile({ name, email });
  };

  return (
    <Layout>
      {" "}
      <div className="sidebarcontent">
        <Container maxWidth="l">
          <Box
            sx={{ bgcolor: "#fff", height: "auto" }}
            className="sidebarcontentprofiles"
          >
            <div className="nameprofile mt-4">{user?.name}</div>
            <div className="linepro w-50 my-4"></div>
            <div className="upperprofile my-4" onClick={handlePencilClick}>
              <Avatar src={profilePic} className="upperprofileavtar" />

              <div className="iconpencilpro">
                <SlPencil fontSize={20} />
              </div>
              <input
                type="file"
                accept="image/*"
                ref={inputFileRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div className="middileprofile mx-5 mt-5">
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-100 my-2"
                required
              />
              <TextField
                id="filled-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                className="w-100 my-2"
                required
              />
              <TextField
                id="filled-basic"
                label="Website"
                variant="filled"
                className="w-100 my-2"
              />
              <TextField
                id="filled-basic"
                label="Instagram"
                variant="filled"
                className="w-100 my-2"
              />
              <TextField
                id="filled-basic"
                label="Twitter"
                variant="filled"
                className="w-100 my-2"
              />
              <TextField
                id="filled-basic"
                label="Facebook"
                variant="filled"
                className="w-100 my-2"
              />
              <TextField
                id="filled-basic"
                label="Write Something About you"
                variant="filled"
                className="w-100 my-2"
              />
            </div>
            <div className="lowerprofile w-100 mt-3 ">
              <button className="btn  btncancelpro">Cancel</button>
              <button className="btn btnsavepro" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default Profilesetting;
