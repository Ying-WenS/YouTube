import React from "react";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ search_btn }) => {
  return (
    <nav>
      <div id="start">
        <i id="guide_icon" class="fas fa-align-justify"></i>
        <i id="logo_icon" class="fab fa-youtube">
          <span>YouTube</span>
        </i>
        <b className="tw">TW</b>
      </div>
      <div id="center">
        <div className="container">
          <input placeholder="搜尋" type="text" />
          <button onClick={search_btn} id="search_btn">
            <i id="search_icon" class="fas fa-search"></i>{" "}
          </button>
        </div>
        <div id="mic_icon">
          <i class="fas fa-microphone"></i>
        </div>
      </div>
      <div id="end">
        <div className="icons">
          <i id="fun_icon" class="fas fa-angle-double-down"></i>
          <i id="create_icon" class="fas fa-plus-square"></i>
          <i id="bell_icon" class="fas fa-bell"></i>
        </div>
        <img
          id="person_pic"
          src="https://images.pexels.com/photos/8467410/pexels-photo-8467410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
    </nav>
  );
};

export default Nav;
