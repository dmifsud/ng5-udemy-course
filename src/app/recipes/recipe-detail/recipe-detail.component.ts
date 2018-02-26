import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { IngredientModel } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredientsToShoppingCart(ingredient: IngredientModel) {
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
