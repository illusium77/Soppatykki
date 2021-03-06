import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';

import { RecipeService } from './services/recipe.service';

import {ListPage} from './pages/list/list';
import {RecipeList} from './pages/recipe-list/recipe-list';
import {RecipeDetail} from './pages/recipe-detail/recipe-detail';
import {RecipeEdit} from './pages/recipe-edit/recipe-edit';


@Component({
  templateUrl: 'build/app.html',
  providers: [RecipeService]
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = RecipeList;
  // rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [{
      title: 'Reseptit',
      component: RecipeList
    }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
