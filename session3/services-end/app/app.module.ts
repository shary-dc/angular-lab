import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },

  {
    path: 'ingredients',
    component: IngredientsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesComponent,
    NewRecipeComponent,
    IngredientsComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
