import { Recipe } from './recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'training-session2';
  recipes: Recipe[] = [
    { id: 10, name: 'Hamburger', type: 'Superb' },
    { id: 11, name: 'Pancakes', type: 'Superb' },
  ];
  onCreateRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }
}
