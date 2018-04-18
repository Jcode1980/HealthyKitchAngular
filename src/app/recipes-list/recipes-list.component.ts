import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../entity/recipe';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.css']
  })

  export class RecipesListComponent implements OnInit {
    recipes: Recipe[];
    imageChoppingBoardPath: string;
    rightPanelImagePath: string;

    constructor(private recipeService: RecipeService) {
      this.imageChoppingBoardPath = '/assets/images/wooden-board-2.png';
      this.rightPanelImagePath = '/assets/images/rightPanelImage.jpg';
    }

    ngOnInit() {
      this.getRecipes();
    }

    getRecipes(): void {
      this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) {
        return;
      }
      this.recipeService.addRecipe({name} as Recipe)
        .subscribe(recipe => {
          this.recipes.push(recipe);
        });
    }

    delete(recipe: Recipe): void {
      this.recipes = this.recipes.filter(h => h !== recipe);
      this.recipeService.deleteRecipe(recipe).subscribe();
    }

    searchResultCallBack(recipes: Recipe[]) {
      // console.log('I got called!!');
      this.recipes = recipes;
    }
  }
