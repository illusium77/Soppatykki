import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';

@Component({
    templateUrl: 'build/pages/recipe-edit/recipe-edit.html'
})
export class RecipeEdit implements OnInit {

    originalRecipe: Recipe;
    recipeUnderEdit: Recipe;
    title: string;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController,
        private recipeService: RecipeService) {

        this.originalRecipe = navParams.get('recipe');

        if (!this.originalRecipe) {
            this.title = "Uusi resepti";
            this.recipeUnderEdit = new Recipe;
        } else {
            this.title = "Muokkaa reseptiä";
            this.recipeUnderEdit = this.originalRecipe.clone();
        }
    }

    ngOnInit() {
    }

    canAdd() {
        let hasUnnamedIngredients = this.recipeUnderEdit.ingredients.some(i => !i.name);
        return !hasUnnamedIngredients;
    }

    canSave() {
        return this.canAdd() && this.recipeUnderEdit.name;
    }

    onAddIngredient() {
        this.recipeUnderEdit.ingredients.push(new Ingredient);
    }

    onRemoveIngredient(ingredient) {
        let index = this.recipeUnderEdit.ingredients.indexOf(ingredient);
        if (index >= 0) {
            this.recipeUnderEdit.ingredients.splice(index, 1);
        }     
    }

    onSave() {

        if (this.originalRecipe) {
            this.recipeService.replace(this.originalRecipe, this.recipeUnderEdit);
        } else {
            this.recipeService.add(this.recipeUnderEdit);
        }

        this.navCtrl.pop();
    }
}