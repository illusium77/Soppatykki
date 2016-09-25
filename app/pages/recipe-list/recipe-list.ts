import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';

import { RecipeService } from '../../services/recipe.service';

import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeEdit } from '../recipe-edit/recipe-edit';

@Component({
    templateUrl: 'build/pages/recipe-list/recipe-list.html'
})

export class RecipeList implements OnInit {

    recipes: Array<Recipe>;

    constructor(private navCtrl: NavController, private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.get();
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