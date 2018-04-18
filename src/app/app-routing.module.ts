import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipesList', pathMatch: 'full' },
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipesList', component: RecipesListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: RecipeEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
