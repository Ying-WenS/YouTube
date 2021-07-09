import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";
import Nav from "./component/Nav";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
