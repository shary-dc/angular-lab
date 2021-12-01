import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  allowNewRecipe = false;
  recipeCreationStatus = 'No recipe was created!';
  recipeName = 'Test Recipe';
  @Output() createRecipe = new EventEmitter<Recipe>();
  constructor() {
    setTimeout(() => {
      this.allowNewRecipe = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateRecipe() {
    this.recipeCreationStatus = `Recipe created: ${this.recipeName}`;
    this.createRecipe.emit({
      id: Math.ceil(Math.random() * 100),
      name: this.recipeName,
      type: 'Superb',
    });
  }

  onUpdaterecipeName(event: Event) {
    this.recipeName = (<HTMLInputElement>event.target).value;
  }
}
