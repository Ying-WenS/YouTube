import React from "react";
import "./styles/style.css";
import Nav from "../src/component/Nav";
import axios from "./api/axios";
import Video from "../src/component/Video";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  // let [data, setData] = useState(null);
  //  search_btn= sync (termFromSearchBar)=>{
  //    const res=await axios.get("",
  //      params:{
  //        q: termFromSearchBar
  //      }
  //     })

  //  }

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
