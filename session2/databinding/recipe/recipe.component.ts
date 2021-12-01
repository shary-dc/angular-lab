import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent {
  recipeId: number = 10;
  recipeType: string = 'Normal';

  getRecipeStatus() {
    return this.recipeType;
  }
}
