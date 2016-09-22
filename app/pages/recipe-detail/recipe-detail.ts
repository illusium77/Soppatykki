import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeEdit } from '../recipe-edit/recipe-edit';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';


@Component({
    templateUrl: 'build/pages/recipe-detail/recipe-detail.html'
})
export class RecipeDetail implements OnInit {

    selectedRecipe: Recipe;

    constructor(navParams: NavParams, public navCtrl: NavController) {
        this.selectedRecipe = navParams.get('recipe');
    }

    ngOnInit() {
    }

    onEdit() {
        this.navCtrl.push(RecipeEdit, {
            recipe: this.selectedRecipe
        });       
    }
}