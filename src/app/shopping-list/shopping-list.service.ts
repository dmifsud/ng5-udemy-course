import { IngredientModel } from '../shared/models/ingredient.model';

export class ShoppingListService {
    private ingredients: IngredientModel[] = [
        new IngredientModel('Bean', 10),
        new IngredientModel('Tomato', 10)
      ];

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
    }
}
