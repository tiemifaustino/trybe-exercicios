import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <main className='pokedex'>
          {pokemons.map((pokemon) => <Pokemon pokemonData={pokemon} key={pokemon.id} />)}
      </main>
    )
  }
}

export default Pokedex;
