import React from "react";

export default function PokemonTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr>
            <td>{props.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
