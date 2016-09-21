import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
    templateUrl: 'build/pages/recipe-list/recipe-list.html'
})
export class RecipeList implements OnInit {

    // recipes: Array<{ name: string, ingredients: string[] }>;
    recipes: Array<Recipe>;

    constructor(public navCtrl: NavController) {

        this.recipes = [{
            name: 'Soppa',
            ingredients: [{ name: 'Pottu'}, { name: 'Makkara'}, { name: 'Porkkana'}]
        }, {
                name: 'Muusi',
                ingredients: []
            }];
    }

    ngOnInit() {

    }

    onSelected(recipe) {
        this.navCtrl.push(RecipeDetail, {
            recipe: recipe
        });

    }

    onAdd() {
        let newRecipe = new Recipe;
        newRecipe.name = 'Karvapulla';
        newRecipe.ingredients = [];

        this.recipes.push(newRecipe);
    }
}