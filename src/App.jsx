import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { GameBox } from "./components/GameBox";
import "./fonts/RobotoCondensed-Bold.ttf";
import "./fonts/RobotoCondensed-Regular.ttf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <GameBox />
    </div>
  );
}
export default App;
