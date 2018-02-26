import { IngredientModel } from '../shared/models/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<IngredientModel[]>();
    private ingredients: IngredientModel[] = [
        new IngredientModel('Bean', 10),
        new IngredientModel('Tomato', 10)
      ];

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModel[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
