import React from "react";

export default function MovieTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.movies.map((movie) => {
            return (
              <tr key={movie.title}>
                <td className="fst-italic">{movie.title}</td>
                <td>{movie.downloadUrl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
    </div>
  );
}
