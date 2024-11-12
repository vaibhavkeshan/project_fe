import React from "react";

const Loader = () => {
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

export default Loader;
