import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonTable from './components/PokemonTable';
import { Pokemon } from './models/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  // Http adress
  const url = 'https://pokeapi.co/api/v2/pokemon-species/1/'

  // Function to fetch the pokemon
  async function fetchPokemon() {
    const res = await fetch(url , {
      method: 'GET',
      // What does this mean?
      headers: {
        'Content-Type': 'application/json',
      },
  });

  const data = await res.json();
  console.log(data);
    /*let pokemonData = data.map((base_happiness) => {
      return new Pokemon(pokemon.name);
    });
    // console.log(pokemonData);*/

    setPokemon(data);
  }

  async function fetchApiPokemon() {
    let url = 'http://localhost:3000/';
    const res = await fetch(url + 'pokemon', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
  }



  return (
    <div className="text-center mt-5 mx-5">
      <button className=" btn btn-primary" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <PokemonTable pokemon={pokemon}></PokemonTable>
    </div>
  );
}

export default App;
