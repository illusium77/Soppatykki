import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';


@Component({
    templateUrl: 'build/pages/recipe-detail/recipe-detail.html'
})
export class RecipeDetail implements OnInit {

    selectedRecipe: Recipe;

    constructor(navParams: NavParams) {
        this.selectedRecipe = navParams.get('recipe');
    }

    ngOnInit() {

    }

    onAdd() {
        this.selectedRecipe.ingredients.push(
            new Ingredient);
    }

}