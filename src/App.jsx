import React from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { GameBox } from "./components/GameBox";
import { SectionInfo } from "./components/SectionInfo";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionSignUp } from "./components/SectionSignUp";
import { Footer } from "./components/Footer";
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
      <SectionSignUp />
      <Footer />
    </div>
  );
}
export default App;
