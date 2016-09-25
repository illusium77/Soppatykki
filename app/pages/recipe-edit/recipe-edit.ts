import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';


@Component({
    templateUrl: 'build/pages/recipe-edit/recipe-edit.html'
})
export class RecipeEdit implements OnInit {

    selectedRecipe: Recipe;
    title: string;

    constructor(navParams: NavParams, public navCtrl: NavController) {

        let alkupRecipe = navParams.get('recipe');

        if (!alkupRecipe) {

            this.title = "Uusi resepti";
            this.selectedRecipe = new Recipe;
        } else {
            this.title = "Muokkaa reseptiä";
            this.selectedRecipe = alkupRecipe.clone();
        }
    }

    ngOnInit() {
    }

    canAdd() {
        let hasUnnamedIngredients = this.selectedRecipe.ingredients.some(i => i.name === '');
        return !hasUnnamedIngredients;
    }

    canSave() {
        return this.canAdd() && this.selectedRecipe.name;
    }

    onAddIngredient() {
        this.selectedRecipe.ingredients.push(new Ingredient);
    } 

    onSave() {
        this.navCtrl.pop();
    }
}