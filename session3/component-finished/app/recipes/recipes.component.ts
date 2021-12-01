import { Recipe } from './../recipe.model';
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
  recipes: Recipe[] = [
    { id: 10, name: 'Hamburger', type: 'Superb' },
    { id: 11, name: 'Pancakes', type: 'Superb' },
  ];
  constructor() {}

  ngOnInit() {}
}
