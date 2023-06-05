// Use bootstrap to expand table when user clicks on it

import React from "react";

export default function RecipeTable(props) {
  return (
    <div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Time (min)</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {
            props.recipes.map((recipe) => {
              return (
                <tr>
                  <td>{recipe.title}</td>
                  <td>{recipe.time}</td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.instructions}</td>
                  <td>
                    <button
                      className="btn btn-danger bn-sm me-1"
                      onClick={() => props.onRecipeDelete(recipe)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning bn-sm mb-1"
                      onClick={() => props.onRecipeEdit(recipe)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            }) // use higher order map function on array, loop through array of books
          }
        </tbody>
      </table>
    </div>
  );
}
