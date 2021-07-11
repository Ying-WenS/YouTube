import axiosIns from "../api/axiosIns";
import React from "react";
import { useState, useEffect } from "react";

const Search = ({ search_btn, setInput }) => {
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <div className="container">
        <input onChange={inputHandler} placeholder="搜尋" type="text" />
        <button onClick={search_btn} id="search_btn">
          <i id="search_icon" className="fas fa-search"></i>{" "}
        </button>
      </div>
      <div id="mic_icon">
        <i className="fas fa-microphone"></i>
      </div>
    </div>
  );
};

export default Search;
