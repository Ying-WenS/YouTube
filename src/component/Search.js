import React, { useState, useEffect } from "react";
import axiosIns from "../api/axiosIns";

const Search = (props) => {
  const [input, setInput] = useState("音樂");

  const search_btn = () => {
    axiosIns
      .get("", {
        params: {
          q: input,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        props.setVideoList(res.data.items);
        console.log("成功");
      })
      .catch((error) => {
        console.log(error);
        console.log("failed");
      });
  };
  useEffect(() => {
    search_btn();
  }, []);
  return (
    <div className="big_container">
      <div className="container">
        <input
          onChange={(event) => setInput(event.target.value)}
          placeholder="搜尋"
          type="text"
        />
        <button onClick={search_btn} id="search_btn">
          <i id="search_icon" className="fas fa-search"></i>{" "}
        </button>
        <div id="mic_icon">
          <i className="fas fa-microphone"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
