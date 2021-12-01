import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private recipeService: RecipeService, private router: Router) {}

  getRecipeStatus() {
    return this.recipe.type;
  }

  getColor() {
    return this.recipe.type === 'Superb' ? 'gold' : 'brown';
  }

  onUpdateType(id: number, type: string) {
    this.recipeService.updateRecipe(id, type);
  }

  onEditClick(id: number) {
    this.router.navigate(['edit_recipe', id]);
  }
}
