import React from "react";

const Video = ({ data }) => {
  return (
    <div className="video">
      <h5>{data}</h5>
      <p>{data.items.snippet}</p>
      <p>{data.kind}</p>
      <p>觀看次數</p>
      <span>前</span>
    </div>
  );
};

export default Video;
