import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeEdit } from '../recipe-edit/recipe-edit';

@Component({
    templateUrl: 'build/pages/recipe-list/recipe-list.html'
})
export class RecipeList implements OnInit {

    recipes: Array<Recipe> = new Array<Recipe>();

    constructor(public navCtrl: NavController) {

        let recipeA = new Recipe('Soppa');
        recipeA.ingredients.push(
            new Ingredient('Pottu'));
        recipeA.ingredients.push(
            new Ingredient('Makkara'));
        recipeA.ingredients.push(
            new Ingredient('Porkkana'));

        this.recipes.push(recipeA);

        let recipeB = new Recipe('Muusi');
        this.recipes.push(recipeB); 
    }

    ngOnInit() {

    }

    onSelected(recipe) {
        this.navCtrl.push(RecipeDetail, {
            recipe: recipe
        });
    }

    onAdd() {
        this.navCtrl.push(RecipeEdit);
    }
}