import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import Home from "./components/Home";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App;
