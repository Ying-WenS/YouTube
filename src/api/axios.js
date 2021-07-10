import React from "react";
import axios from "axios";

const myKey = "AIzaSyDYQHxyOCHQTX_TSkeP59td4JHxOt9M73Y";
axios.create(
  {
    baseURL: "https://www.googleapis.com/youtube/v3/search",
    params: {
      part: "snippet",
      maxResults: 5,
      key: myKey,
      type: "video",
    },
  }
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((error) => {
  //   console.log(error);
  //   console.log("connect failed");
  // })
);
export default axios;
