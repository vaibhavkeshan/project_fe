import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { useContext } from "react";
import { UserContext } from "../context/MyContext";

const Hero = () => {
  const navigate = useNavigate();
  const { authenticate, project } = useContext(UserContext);

  return (
    <div className="backgroundSet">
      <div className="homeHeader">
        <HomeHeader />
      </div>
      <video autoPlay muted loop id="bgVideo" className="video">
        <source
          src="https://artivive.com/assets/uploads/2023/10/creatives-desktop.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="bg_set"></div>
      <div className="content">
        <h1>
          Create With <br /> TravelAR
        </h1>
        <p>
          An Easy-To-Use Augmented Reality Tool For Enhancing Creative
          Experiences
        </p>

        <button
          onClick={() => {
            authenticate
              ? project?.length > 0
                ? navigate("/userdashboard")
                : navigate("/project")
              : navigate("/signin");
          }}
          class="button atsmall"
        >
          SightAR
        </button>
      </div>
    </div>
  );
};

export default Hero;
