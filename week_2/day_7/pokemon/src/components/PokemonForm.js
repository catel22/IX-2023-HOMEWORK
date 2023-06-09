import React, { useState } from 'react';

export default function PokeForm(props) {
  const [input, setInput] = useState('');

  function onPokeFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    clearInputs();
    props.fetchPokemon(input);

  }

  function isValid() {
    return input !== '';
  }

  function clearInputs() {
    setInput('');
  }

  return (
    <div>
      <h6>Enter name of Pokemon:</h6>

      <form id="form" onSubmit={onPokeFormSubmit}>
        <div className="mb-3">
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        
      <button className="btn btn-outline-primary btn-sm mb-4" onClick={() => props.fetchPokemon(input)}>
        Fetch Pokemon Data
      </button>
      </form>



    </div>
  );
}