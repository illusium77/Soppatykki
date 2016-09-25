import { Ingredient } from './ingredient';

export class Recipe {

    name: string;
    ingredients: Array<Ingredient>;

    constructor(name?: string) {
        this.name = name;
        this.ingredients = new Array<Ingredient>();
    }

    clone(): Recipe {

        let copy = new Recipe;
        copy.name = this.name;

        for (let i of this.ingredients) {
            let ingredientCopy = i.clone();
            copy.ingredients.push(ingredientCopy);
        }

        return copy;
    }
}