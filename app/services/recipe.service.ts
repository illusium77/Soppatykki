import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class RecipeService {

    recipes: Array<Recipe> = new Array<Recipe>();

    get(): Array<Recipe> {

        let recipeA = new Recipe('Soppa');
        recipeA.ingredients.push(
            new Ingredient('Pottu'));
        recipeA.ingredients.push(
            new Ingredient('Makkara'));
        recipeA.ingredients.push(
            new Ingredient('Porkkana'));

        this.add(recipeA);

        let recipeB = new Recipe('Muusi');
        this.add(recipeB);

        return this.recipes;
    }

    remove(recipe): void {
        let index = this.recipes.indexOf(recipe);
        if (index >= 0) {
            this.recipes.splice(index, 1);
        }
    }

    replace(original, updated): void {
        let index = this.recipes.indexOf(original);
        if (index >= 0) {
            this.recipes[index].update(updated);
        } else {
            // original not found, add anyway
            this.add(updated);
        }
    }

    add(recipe): void {

        if (this.recipes.indexOf(recipe) === -1) {
            this.recipes.push(recipe);
        }
    }
}