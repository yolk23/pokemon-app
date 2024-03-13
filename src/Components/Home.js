import React from "react";
import Navbar from "./Navbar";
import "../Stylings/Home.css";
import Button from "../Utils/Button";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container-home">
      <Navbar />
      <div
        className="container"
        style={{
          height: "70vh",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "",
        }}
      >
        <div className="box">
          <h1>Gotta Catch Em All!</h1>
          <p>
            Pokémon is a captivating world where fantastical creatures roam,
            each with unique powers and personalities, waiting to be discovered.
            As a Pokémon Trainer, you'll embark on an epic journey, forming deep
            bonds with these creatures as you explore diverse landscapes and
            engage in thrilling battles. It's a universe filled with adventure,
            friendship, and the excitement of uncovering new Pokémon to add to
            your team.
          </p>
          <Button />
        </div>
        <div className="box">
          <img
            src="https://i.gifer.com/YNXo.gif"
            alt="Pikachu"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
