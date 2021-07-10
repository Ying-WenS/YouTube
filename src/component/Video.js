import React from "react";

const Video = ({ data }) => {
  return (
    <div className="video">
      <video src=""></video>

      <div id="controls">
        <button className="palyer_btn">
          <i class="fas fa-play"></i>
        </button>
      </div>
      <h5></h5>
      <p></p>
      <p></p>
      <p>觀看次數</p>
      <span>前</span>
    </div>
  );
};

export default Video;
