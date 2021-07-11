import React from "react";
import Nav from "../src/component/Nav";
import Search from "../src/component/Search";
import axiosIns from "./api/axiosIns";
import Video from "../src/component/Video";
import { useState, useEffect } from "react";
import "./styles/style.css";

function App() {
  const [input, setInput] = useState("");
  const API_KEY = "AIzaSyDsXsARJ1EzZyPNy2gASReOGbMicwtvkic";
  let [data, setData] = useState(null);
  const search_btn = async () => {
    let dataRes = await axiosIns.get().then((res) => {
      setData(res.data.items);
    });
  };
  useEffect(() => {
    search_btn();
  }, [axiosIns]);

  return (
    <div className="App">
      <Nav />
      <Search
        search_btn={() => {
          // search_btn(axiosIns);
        }}
        setInput={setInput}
      />
      <div className="videos">
        {data &&
          data.map((d) => {
            return <Video data={d} />;
          })}
      </div>
    </div>
  );
}

export default App;
