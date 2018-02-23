import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedRecipe = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onSelectedRecipeItem(recipe: RecipeModel) {
    this.onSelectedRecipe.emit(recipe);
  }

}
