import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedRecipe = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Burger', 'Whole food burger', 'http://assets.wholefoodsmarket.com/recipes/2762/460/290/2762.jpg'),
    new RecipeModel('Another Burger', 'Another Whole food burger',
                    'https://www.peta.org/wp-content/uploads/2015/05/eggplant-vegan-burger-602x585-1432838012.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipeItem(recipe: RecipeModel) {
    this.onSelectedRecipe.emit(recipe);
  }

}
