import React from "react";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar " id="navColor">
      <span className="navbar-brand text-wrap" id="spanEstilo">
        <img
          id="logoHenry"
          src={Logo}
          width="60"
          height="60"
          className
          alt="Logo"
        />
        Cristian Ferraggina--Weather App
      </span>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
