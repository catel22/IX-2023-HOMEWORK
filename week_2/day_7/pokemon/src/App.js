import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import PokemonTable from "./components/PokemonTable";
import PokemonForm from "./components/PokemonForm";
import { Pokemon } from "./models/pokemon";

function App() {
  const [pokemon, setPokemon] = useState(null);

  // Http adress
  const url = "https://pokeapi.co/api/v2/pokemon/";

  // Function to fetch the pokemon
  async function fetchPokemon(pokemonName) {
    pokemonName = pokemonName.toLowerCase();
    const res = await fetch(url + pokemonName, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    let name = data.species.name;

    //get moves that can be learned
    let moves = [];
    for (let i = 0; i < data.moves.length; i++) {
      moves.push(data.moves[i].move.name);
    }

    //get img
    const imageURL = data.sprites.front_default;

    //get base stats (hp, attack, defense, spatk, spdef, spd )
    let baseStats = [];
    for (let i = 0; i < 6; i++) {
      baseStats.push(data.stats[i].base_stat);
    }

    console.log(baseStats);
    let pokemon = new Pokemon(name, moves, imageURL, baseStats);
    console.log(pokemon);
    setPokemon(pokemon);
  }

  return (
    <div className="text-center mt-5 mx-5">
      <PokemonForm fetchPokemon={fetchPokemon}></PokemonForm>
      <PokemonTable pokemon={pokemon}></PokemonTable>
    </div>
  );
}

export default App;
