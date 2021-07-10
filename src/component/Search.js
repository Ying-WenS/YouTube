import axios from "axios";
import React from "react";
import React, { useState, useEffect } from "react";

const Search = (search_btn) => {
  let [input, setInput] = useState("");
  const search_btn = async (termFromSearchBar) => {
    let dataRes = await axios.get("", {
      params: {
        q: termFromSearchBar,
      },
    });
    const inputHandler = (event) => {
      console.log(event.target.value);
    };
    const search_btn = (event) => {
      console.log(event.target.value);
    };
  };

  return (
    <div>
      <div className="container">
        <input onChange={inputHandler} placeholder="搜尋" type="text" />
        <button onClick={search_btn} id="search_btn">
          <i id="search_icon" class="fas fa-search"></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default Search;
