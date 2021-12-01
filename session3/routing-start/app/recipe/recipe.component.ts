import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() updateType = new EventEmitter<{ id: number; type: string }>();

  constructor() {}

  getRecipeStatus() {
    return this.recipe.type;
  }

  getColor() {
    return this.recipe.type === 'Superb' ? 'gold' : 'brown';
  }

  onUpdateType(id: number, type: string) {
    this.updateType.emit({
      id,
      type,
    });
  }
}
