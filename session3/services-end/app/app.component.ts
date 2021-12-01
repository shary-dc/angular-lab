import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService],
})
export class AppComponent {
  title = 'training-session2';

  constructor(public recipeService: RecipeService) {}

  onCreateRecipe(recipe: Recipe): void {
    this.recipeService.addRecipe(recipe);
  }
}
