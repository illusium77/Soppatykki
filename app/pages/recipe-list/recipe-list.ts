import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'build/pages/recipe-list/recipe-list.html'
})
export class RecipeList implements OnInit {

    // recipes: string[];
    recipes: Array<{ name: string, ingredients: string[] }>;

    constructor() {
        // this.recipes = ['Soppa', 'Muusi'];
        this.recipes = [{
            name: 'Soppa',
            ingredients: []
        }, {
            name: 'Muusi',
            ingredients: []
        }];
    }

    ngOnInit() {

    }

    onSelected(recipe) {

    }

    onAdd() {

        this.recipes.push({
            name: 'Karvapulla',
            ingredients: []
        });
    }

}