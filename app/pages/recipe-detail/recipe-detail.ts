import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { RecipeEdit } from '../recipe-edit/recipe-edit';
import { RecipePopover } from '../recipe-popover/recipe-popover';

import { Recipe } from '../../models/recipe';

import { RecipeService } from '../../services/recipe.service';


@Component({
    templateUrl: 'build/pages/recipe-detail/recipe-detail.html'
})
export class RecipeDetail implements OnInit {

    selectedRecipe: Recipe;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController,
        private popoverCtrl: PopoverController,
        private recipeService: RecipeService) {

        this.selectedRecipe = navParams.get('recipe');
    }

    ngOnInit() {
    }

    onDismiss(action, self) {
        if (action === 'edit') {
            self.navCtrl.push(RecipeEdit, {
                recipe: self.selectedRecipe
            });
        } else if (action === 'delete') {
            self.recipeService.remove(self.selectedRecipe);
            self.navCtrl.pop();
        }
    }

    onShowMenu($event) {
        let popover = this.popoverCtrl.create(RecipePopover);

        let self = this; // on callback, this refers to popover
        popover.onDidDismiss(function (action: string) {

            if (action === 'edit') {
                self.navCtrl.push(RecipeEdit, {
                    recipe: self.selectedRecipe
                });
            } else if (action === 'delete') {
                self.recipeService.remove(self.selectedRecipe);
                self.navCtrl.pop();
            }
        });

        popover.present({
            ev: $event,
        });

    }
}