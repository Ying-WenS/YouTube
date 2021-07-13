import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Video = (props) => {
  // useEffect(() => {
  //   console.log(props);
  // }, [props]);
  return (
    <div className="videoList">
      {props.dataList &&
        props.dataList.map((item, index) => {
          console.log(item.snippet);
          return (
            <div className="videos" key={index}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              />
              <p className="title">{item.snippet.title}</p>
              <p className="channelTitle">{item.snippet.channelTitle}</p>
            </div>
          );
        })}
    </div>
  );
};
export default Video;
