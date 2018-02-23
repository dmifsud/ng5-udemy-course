import { EventEmitter } from '@angular/core';

import { RecipeModel } from '../../recipes/recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<RecipeModel>();

    private recipes: RecipeModel[] = [
        new RecipeModel('Burger', 'Whole food burger', 'http://assets.wholefoodsmarket.com/recipes/2762/460/290/2762.jpg'),
        new RecipeModel('Another Burger', 'Another Whole food burger',
                        'https://www.peta.org/wp-content/uploads/2015/05/eggplant-vegan-burger-602x585-1432838012.jpg')
      ];

    getRecipes() {
        return [...this.recipes];
    }
}
