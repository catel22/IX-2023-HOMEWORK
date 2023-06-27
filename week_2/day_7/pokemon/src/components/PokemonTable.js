import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PokemonTable(props) {
  if (!props.pokemon) {
    return;
  }

  return (
    <div className="card mx-5 mt-3 p-4 bg-light">
      <h3>
        {" "}
        {props.pokemon.name.charAt(0).toUpperCase() +
          props.pokemon.name.slice(1)}{" "}
      </h3>

      <div>
        {props.pokemon.imageURL && (
          <img src={props.pokemon.imageURL} alt="Pokemon" />
        )}
      </div>

      {/* get base stats (hp, attack, defense, spatk, spdef, spd ) */}
      <h6 className="mt-1"> Base stats: </h6>

      <div className="px-5 mx-5" style={{ overflow: "auto" }}>
        <div style={{ float: "left", width: "50%" }}>
          <p>
            {" "}
            <strong> HP: </strong> {props.pokemon.stats[0]}
          </p>
          <p>
            {" "}
            <strong> Atk: </strong> {props.pokemon.stats[1]}
          </p>
          <p>
            {" "}
            <strong> Def: </strong> {props.pokemon.stats[2]}
          </p>
        </div>
        <div style={{ float: "left", width: "50%" }}>
          <p>
            {" "}
            <strong> SpAtk: </strong> {props.pokemon.stats[3]}
          </p>
          <p>
            {" "}
            <strong> SpDef: </strong> {props.pokemon.stats[4]}
          </p>
          <p>
            {" "}
            <strong> Speed: </strong> {props.pokemon.stats[5]}
          </p>
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
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Moves that{" "}
                {props.pokemon.name.charAt(0).toUpperCase() +
                  props.pokemon.name.slice(1)}{" "}
                can learn:
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <div className="row">
                <div className="col">
                  {props.pokemon.moves
                    .slice(0, Math.ceil(props.pokemon.moves.length / 2))
                    .map((element, index) => (
                      <p key={index}>{element}</p>
                    ))}
                </div>
                <div className="col">
                  {props.pokemon.moves
                    .slice(Math.ceil(props.pokemon.moves.length / 2))
                    .map((element, index) => (
                      <p key={index}>{element}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
