import React from "react";

const Video = ({ data }) => {
  return (
    <div className="video">
      <img src={data.snippet.thumbnails.medium.url} alt="" />
      <div>
        <p className="title">{data.snippet.title}</p>
        <p className="channelTitle">{data.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
