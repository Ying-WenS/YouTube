import React from "react";
import { useState, useEffect } from "react";
import Nav from "../component/Nav";

const myKey = "AIzaSyDYQHxyOCHQTX_TSkeP59td4JHxOt9M73Y";
const Homepage = () => {
  const [input, setInput] = useState("");

  let [data, setData] = useState(null);
  const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${myKey}&type=video&maxResults=50`;
  const search_btn = async () => {
    const dataFetch = await fetch(searchURL, {
      method: "GET",
      header: {
        Accept: "application/json",
        Authorization: myKey,
      },
      body: JSON.stringify(),
    });
    let parsedData = await dataFetch.json();
    setData(parsedData);
  };

  return (
    <div>
      <Nav search_btn={search_btn} />
      <div className="video">
        {data &&
          data.map((d) => {
            return <Video data={d} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
