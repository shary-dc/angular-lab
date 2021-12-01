import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  allowNewRecipe = false;
  recipeCreationStatus = 'No recipe was created!';
  recipeName = 'Test Recipe';
  constructor() {
    setTimeout(() => {
      this.allowNewRecipe = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateRecipe() {
    this.recipeCreationStatus = `Recipe created: ${this.recipeName}`;
  }

  onUpdaterecipeName(event: Event) {
    this.recipeName = (<HTMLInputElement>event.target).value;
  }
}
