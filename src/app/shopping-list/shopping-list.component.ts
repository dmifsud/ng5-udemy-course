import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Bean', 10),
    new IngredientModel('Tomato', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onAddIngredients(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }

}
