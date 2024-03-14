import React from "react";
import Navbar from "./Navbar";
import "../Stylings/Home.css";
import Button from "../Utils/Button";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Home = () => {
  const [dividerWords, setDividerWords] = useState(0);
  const words = ["Welcome To Pokemon", "Explore the World!", "Catchem' All!"];
  const [youtubeID] = useState("rg6CiPI6h2g");

  useEffect(() => {
    const intervals = setInterval(() => {
      setDividerWords((index) => (index + 1) % words.length);
    }, 5000);
  }, []);

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
        <div className="box" style={{ border: "none" }}>
          <img
            src="https://i.gifer.com/YNXo.gif"
            alt="Pikachu"
            style={{ width: "80%", height: "100%" }}
          />
        </div>
      </div>
      <div className="container" style={{ background: "red" }}>
        <h3>{words[dividerWords]}</h3>
      </div>
      <div
        className="container"
        style={{
          height: "70vh",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "",
        }}
      >
        <div className="box" style={{ border: "none" }}>
          <h1>Catchy Theme Songs</h1>
          <iframe
            className="video"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
            width="100%"
            height="300px"
          ></iframe>
        </div>
        <div className="box">
          <h1>Venture Forth</h1>
          <p>
            Pokemon: Where creatures with personalities as electric as Pikachu
            and charm as timeless as Charmander roam, turning every journey into
            an adventure, every battle into a legendary tale, and every trainer
            into a hero
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
