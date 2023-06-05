// CRUD Functions: create, read, update, delete
// useState will track any changes

import "./App.css";
import { useState } from "react";

// Import recipe form
import RecipeForm from "./components/RecipeForm";
import RecipeTable from "./components/RecipeTable";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Declare a new state variable
  // React hook manages component state
  const [recipes, setRecipes] = useState([]); // default state empty array
  const [recipeToEdit, setRecipeToEdit] = useState(null); // default state is null

  // When new recipe created, add to array
  function onRecipeCreated(recipe) {
    setRecipeToEdit(null); // default state so button is correct
    setRecipes([...recipes, recipe]);
  }

  function onRecipeDelete(recipe) {
    // only return books with a different title
    setRecipes(recipes.filter((x) => x.title !== recipe.title));
  }

  function onRecipeEdit(recipe) {
    // set value of recipe to edit
    setRecipeToEdit(recipe);
    // remove original from array
    setRecipes(recipes.filter((x) => x.title !== recipe.title));
  }

  return (
    <div className="patterns pt1">
      <div className="text-center m-5">
        <div className="card p-4 bg-dark text-white">
          <RecipeForm
            recipeToEdit={recipeToEdit}
            onRecipeCreated={onRecipeCreated}
          ></RecipeForm>
          <RecipeTable
            recipes={recipes}
            onRecipeEdit={onRecipeEdit}
            onRecipeDelete={onRecipeDelete}
          ></RecipeTable>
        </div>
      </div>
    </div>
  );
} // when form is submitted, send recipe up to function
// Send recipes down into table component to render in table

export default App;