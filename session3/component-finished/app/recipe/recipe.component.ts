import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [
    `
      .superb {
        color: purple;
      }
    `,
  ],
})
export class RecipeComponent {
  @Input('value') recipe: Recipe;
  recipeId: number = 10;
  recipeType: string = 'Superb';

  constructor() {}

  getRecipeStatus() {
    return this.recipe.type;
  }

  getColor() {
    return this.recipe.type === 'Superb' ? 'gold' : 'brown';
  }
}
