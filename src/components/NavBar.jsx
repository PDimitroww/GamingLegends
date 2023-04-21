import { useState, useEffect } from "react";
import logo from "../../public/LOGO.svg";
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <IconContext.Provider value={{ color: "white", size: "20px" }}>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
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
        <div>
          <button className="btn btnCart">
            <BsCart3 />
          </button>
          <button className="btn btnLogin">
            <BsFillPersonFill />
          </button>
        </div>
      </nav>
    </IconContext.Provider>
  );
};
