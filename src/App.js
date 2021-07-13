import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Nav from "../src/component/Nav";
import Video from "../src/component/Video";

function App() {
  const [videoList, setVideoList] = useState([]);
  const onSetVideoData = (data) => setVideoList(data);

  return (
    <div className="App">
      <Nav setVideoList={onSetVideoData} />
      <div className="videos">
        <Video dataList={videoList} />
      </div>
    </div>
  );
}

export default App;
