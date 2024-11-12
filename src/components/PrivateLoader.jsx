import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateLoader = ({ path }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate(`${path}`);
    return () => clearInterval(interval);
  }, [count, navigate, path]);
  return (
    <div class="loader-overlay">
      <div class="loader">
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--dot"></div>
        <div class="loader--text"></div>
      </div>
      {/* <div className="messageToUser text-center">
        <p>Please wait its uploading</p>
      </div> */}
    </div>
  );
};

export default PrivateLoader;
