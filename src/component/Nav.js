import React from "react";
import Search from "./Search";

const Nav = (props) => {
  return (
    <nav>
      <div id="start">
        <i id="guide_icon" className="fas fa-align-justify"></i>
        <i id="logo_icon" className="fab fa-youtube">
          <span>YouTube</span>
        </i>
        <span className="tw">TW</span>
      </div>
      <div id="center">
        <Search setVideoList={props.setVideoList} />
      </div>
      <div id="end">
        <div className="icons">
          <i id="fun_icon" className="fas fa-angle-double-down"></i>
          <i id="create_icon" className="fas fa-plus-square"></i>
          <i id="bell_icon" className="fas fa-bell"></i>
          <img
            id="person_pic"
            src="https://images.pexels.com/photos/8467410/pexels-photo-8467410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
