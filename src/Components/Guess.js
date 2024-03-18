import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Utils, { fetchData } from "./utils";
import { useEffect, useState } from "react";
import Confetti from "../Images/confetti.gif";
import "../Stylings/Guess.css";

const Guess = () => {
  const [data, setData] = useState(null);
  const [pokemonGuess, setPokemonGuess] = useState(
    Math.floor(Math.random() * (1026 - 1) + 1)
  );
  const [numberOfGuess, setNumberOfGuesses] = useState(0);
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState("");
  const [congrats, setCongrats] = useState(false);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetched = await fetchData(
          `https://pokeapi.co/api/v2/pokemon/${pokemonGuess}`
        );
        setData(fetched);
        console.log(data);
      } catch {
        console.log("Error");
      }
    };

    fetchDataFromApi();
  }, [pokemonGuess, answer]);

  const getOtherPokemon = () => {
    setPokemonGuess(Math.floor(Math.random() * (1026 - 1) + 1));
    resetGuess();
  };

  const guess = (guessValue) => {
    setAnswer(guessValue);
    setNumberOfGuesses(numberOfGuess + 1);
    if (guessValue === data.name) {
      setCongrats(!congrats);
    }
  };

  const resetGuess = () => {
    setNumberOfGuesses(0);
  };

  const revealimage = () => {
    if (congrats) {
      return "brightness(100)";
    } else return "brightness(0)";
  };

  return (
    <div>
      <Navbar />

      <h1
        style={{
          textAlign: "center",
          backgroundColor: "white",
          border: "solid",
        }}
      >
        Guess that Pokemon!
      </h1>
      {congrats && (
        <div style={{ backgroundColor: "aqua" }}>
          <h1
            className="fade-in"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroudColor: "red",
            }}
          >
            Congratulations
          </h1>
        </div>
      )}

      <div
        className="container"
        style={{
          height: "70vh",
        }}
      >
        <div style={{ display: "block" }}>
          {data && (
            <img
              src={data.sprites.front_default}
              alt="pokemon"
              style={{
                width: "20vh",
                filter: congrats ? "" : "brightness(0)",
              }}
            />
          )}

          <div className="hint1">
            {numberOfGuess > 4 && (
              <>
                <h1>Hint 1</h1>
                <div>
                  {data.types.map((dataType, index) => (
                    <div key={index}>
                      <p>
                        Type {index + 1} :{dataType.type.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="hint2">
            {numberOfGuess > 9 && (
              <>
                <h1>Hint 2:</h1>
                <p>Cry Sound:</p>
                <audio controls src={data.cries.latest}></audio>
              </>
            )}
          </div>
          <div className="hint3">
            {numberOfGuess == 15 && (
              <>
                <h1>Hint 3:</h1>
                <p>First Letter of Pokemon:</p>
                <p>{data.name.at(0)}</p>
              </>
            )}
          </div>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button onClick={() => guess(text)} style={{}}>
            Guess
          </button>
          <div style={{ padding: "10px" }}>
            <button onClick={getOtherPokemon} style={{ display: "block" }}>
              Click to play Again!
            </button>
          </div>

          {numberOfGuess < 15 && (
            <h1>
              Number of Guess <br></br>till next Hint :{" "}
              {5 - (numberOfGuess % 5)}
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guess;
