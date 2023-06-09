// I am using the Pokemon Species endpoint for my API
// The application will allow the user to select a pokemon species
// It will return the following: id, name, capture_rate, base_happiness, egg_groups
// API: https://pokeapi.co/api/v2/pokemon-species/{id or name}/
export class Pokemon {
    constructor(name, moves, image, stats) {
        this.name=name;
        this.moves=moves;
        this.image=image;
        this.stats=stats;
    }
  }