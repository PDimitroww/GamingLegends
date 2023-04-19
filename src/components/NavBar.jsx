import react, { useState, useEffect } from "react";
import logo from "../../public/LOGO.svg";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

export const NavBar = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "20px" }}>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search.."
            name="query"
            className="searchBar"
          />
          <button className="searchBar__btn">
            <BsSearch />
          </button>
        </div>
        <p>React</p>
      </nav>
    </IconContext.Provider>
  );
};
