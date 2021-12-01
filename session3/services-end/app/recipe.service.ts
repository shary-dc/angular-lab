import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    { id: 10, name: 'Hamburger', type: 'Superb' },
    { id: 11, name: 'Pancakes', type: 'Superb' },
  ];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, type: string) {
    const recipe = this.recipes.find((r) => r.id == id);

    if (recipe) {
      recipe.type = type;
    }
  }
}
