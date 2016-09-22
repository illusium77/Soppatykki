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

        this.selectedRecipe = navParams.get('recipe');

        if (!this.selectedRecipe) {

            this.title = "Uusi resepti";
            this.selectedRecipe = {
                name: '',
                ingredients: []
            }
        } else {
            this.title = "Muokkaa reseptiä";
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
        this.selectedRecipe.ingredients.push({
            name: ''
        });
    }

    onSave() {
        this.navCtrl.pop();
    }
}