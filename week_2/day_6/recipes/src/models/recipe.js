//Export class so it can be used in other files
export class Recipe {
    constructor(title, time, ingredients, instructions) {
      this.title = title;
      this.time = time;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  }