import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-recipes]',
  // selector: '.app-recipes',
  selector: 'app-recipes',
  // template: `
  //   <app-recipe></app-recipe>
  //   <app-recipe></app-recipe>`,
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  allowNewRecipe = false;
  recipeCreationStatus = 'No recipe was created!';
  recipeName = 'Test Recipe';

  constructor() {
    setTimeout(() => {
      this.allowNewRecipe = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateRecipe() {
    this.recipeCreationStatus = `Recipe created: ${this.recipeName}`;
  }

  onUpdaterecipeName(event: Event) {
    this.recipeName = (<HTMLInputElement>event.target).value;
  }
}
