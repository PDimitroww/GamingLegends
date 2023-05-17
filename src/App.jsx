import React from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SectionInfo } from "./components/SectionInfo";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionSignUp } from "./components/SectionSignUp";
import { Footer } from "./components/Footer";
import "./fonts/RobotoCondensed-Bold.ttf";
import "./fonts/RobotoCondensed-Regular.ttf";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Page } from "./pages/Page";
import { Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/GamePage";
import { AllGames } from "./components/AllGames";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
      <Routes>
        <Route path="/AllGames" element={<AllGames />} />
      </Routes>
      <Routes>
        <Route path="/page" element={<Page />} />
      </Routes>
      <SectionInfo />
      <SectionTestimonials />
      <SectionSignUp />
      <Footer />
    </div>
  );
}
export default App;
