import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeModel } from '../recipe.model';
import { IngredientModel } from '../../shared/models/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }
  recipe: RecipeModel;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const recipeId = params['id'];
      this.recipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onAddIngredientsToShoppingCart(ingredient: IngredientModel) {
    // this.slService.addIngredients(this.recipe.ingredients);
  }

}
