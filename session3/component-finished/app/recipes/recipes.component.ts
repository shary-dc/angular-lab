import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
