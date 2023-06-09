import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokemonTable(props) {
  if (!props.pokemon) {
    return;
  }
  
  return (
    <div className="card mx-5 mt-3 p-4 bg-light">
        <h3> {props.pokemon.name} </h3>

        <div>
        {props.pokemon.image && <img src={props.pokemon.image} alt="Pokemon" />}
        </div>

        {/* get base stats (hp, attack, defense, spatk, spdef, spd ) */}
        <h6 className = "mt-1"> Base stats: </h6>


    <div className = "px-5 mx-5" style={{ overflow: 'auto' }}>
        <div  style={{ float: 'left', width: '50%' }}>
            <p> <strong> HP: </strong> {props.pokemon.baseStats}</p> 
        </div>
         <div  style={{ float: 'left', width: '50%' }}>
            <p> <strong> SpAtk: </strong> {props.pokemon.baseStats}</p> 
        </div>
    </div>        

        <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ background: 'none', border: 'none', textDecoration: 'none', color: 'black'}}
            >
              Moves that {props.pokemon.name} can learn (click here to collapse):
            </button>
          </h5>
        </div>
      </div>
    </div>




    </div>
        
  );

  


}
