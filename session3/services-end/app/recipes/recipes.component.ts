import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onUpdateType(updateTypeEvent: { id: number; type: string }) {
    this.recipeService.updateRecipe(updateTypeEvent.id, updateTypeEvent.type);
  }
}
