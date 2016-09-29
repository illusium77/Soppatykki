import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/recipe-popover/recipe-popover.html'
})

export class RecipePopover  {

    constructor(
        private viewCtrl: ViewController) {
    }

    onClick(action: string) {
        this.viewCtrl.dismiss(action);
    }
}