import React from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { GameBox } from "./components/GameBox";
import { SectionInfo } from "./components/SectionInfo";
import { SectionTestimonials } from "./components/SectionTestimonials";
import "./fonts/RobotoCondensed-Bold.ttf";
import "./fonts/RobotoCondensed-Regular.ttf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <GameBox />
      <SectionInfo />
      <SectionTestimonials />
    </div>
  );
}
export default App;
