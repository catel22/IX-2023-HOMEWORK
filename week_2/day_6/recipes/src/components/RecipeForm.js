// Recipe should have four components: name, time, ingredients, and instructions
// We will use a similar framework to library
// With more time make individual additions for instructions/recipe


// Do not need to import bootstrap because implementing in App.js
import React, { useState, useEffect} from 'react';
import { Recipe } from '../models/recipe';

export default function RecipeForm(props) {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

// React hook that runs function when variable/object changes
useEffect(() => {
    if (props.recipeToEdit) {
      setTitle(props.recipeToEdit.title);
      setTime(props.recipeToEdit.time);
      setIngredients(props.recipeToEdit.ingredients);
      setInstructions(props.recipeToEdit.instructions);
    }
  }, [props.recipeToEdit]);

  function onRecipeFormSubmit(event) {
    event.preventDefault(); //prevent automatic refresh

    if (!isValid()) { // check if input is valid
      return;
    }

    let recipe = new Recipe(title, time, ingredients, instructions); // update recipe information
    props.onRecipeCreated(recipe);
    clearInputs(); // reset inputs with funciton
  }

  function isValid() {
    return title !== "" && time !== null && ingredients !== "" && instructions !== "";
  }

  function clearInputs() {
    setTitle("");
    setTime("");
    setIngredients("");
    setInstructions("");
  }

  return (
    <div>
      <h1 className='text-decoration-underline'>Recipes</h1>
      

      <form id="form" onSubmit={onRecipeFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Time (min) </label>
          <input
            id="time-input"
            type="number"
            className="form-control"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Ingredients </label>
          <input
            id="ingredients-input"
            type="text"
            className="form-control"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Instructions </label>
          <input
            id="instructions-input"
            type="text"
            className="form-control"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.recipeToEdit ? "Update Recipe" : "Add Recipe"}
          </button>
        </div>
      </form>
    </div>
  );
}
// if props contains a book to edit, say update book, otherwise say add book


