import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const POKEMONS_PER_PAGE = 30;

  useEffect(() => {
    const fetchPokemon = async () => {
      const offset = (currentPage - 1) * POKEMONS_PER_PAGE;
      const url = `${BASE_URL}?offset=${offset}&limit=${POKEMONS_PER_PAGE}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPokemonList(data.results);
        console.log(pokemonList);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Pokémon List</h1>

        <ul>
          {pokemonList.map((pokemon, index) => (
            <div
              style={{
                border: "solid",
                display: "inline-flex",
                backgroundColor: "white",
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  (currentPage - 1) * POKEMONS_PER_PAGE + index + 1
                }.png`}
                alt={pokemon.name}
              />
              <li key={index}>{pokemon.name}</li>
            </div>
          ))}
        </ul>

        <div>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pokedex;
