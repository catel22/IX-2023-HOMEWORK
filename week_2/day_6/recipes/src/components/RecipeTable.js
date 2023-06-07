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
                <tr className="accordion">
                  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {recipe.title}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <tr class="accordion-body">
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
    </div>
    </div>
                </tr>
              );
            }) // use higher order map function on array, loop through array of books
          }
        </tbody>
      </table>
    </div>
  );
}


    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
