// Navbar.js
import "../Stylings/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";
import { RiCellphoneFill } from "react-icons/ri";
import { LuGamepad } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <nav>
        <ul>
          <li>
            <SiPokemon size={30} />
          </li>
          <li>
            <MdCatchingPokemon />
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <RiCellphoneFill />
            <NavLink to="/Pokedex">Pokedex</NavLink>
          </li>
          <li>
            <LuGamepad />
            <NavLink to="/Guess">Guess that Pokemon!</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
