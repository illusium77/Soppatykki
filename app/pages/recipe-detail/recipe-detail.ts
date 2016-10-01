import { Component, OnInit} from '@angular/core';
import { AlertController, NavController, NavParams, PopoverController } from 'ionic-angular';

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
        private recipeService: RecipeService,
        private alertCtrl: AlertController) {

        this.selectedRecipe = navParams.get('recipe');
    }

    ngOnInit() {
    }

    onConfirmDelete(self) {
        let confirm = self.alertCtrl.create({
            title: 'Reseptin poisto',
            message: 'Haluatko varmasti poistaa reseptin?',
            buttons: [{
                text: 'Ei',
                handler: () => {}
            }, {
                text: 'Kyllä',
                handler: () => {
                    self.recipeService.remove(self.selectedRecipe);
                    self.navCtrl.pop();
                }
            }]
        });
        confirm.present();
    }

    onShowMenu($event) {
        let popover = this.popoverCtrl.create(RecipePopover);

        let self = this; // on callback, this refers to popover
        popover.onDidDismiss((action: string) => {
            if (action === 'edit') {
                self.navCtrl.push(RecipeEdit, {
                    recipe: self.selectedRecipe
                });
            } else if (action === 'delete') {
                self.onConfirmDelete(self);
            }
        });
        

        popover.present({
            ev: $event,
        });

    }
}