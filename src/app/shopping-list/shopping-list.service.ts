import { IngredientModel } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<IngredientModel[]>(); // new EventEmitter<IngredientModel[]>();
    private ingredients: IngredientModel[] = [
        new IngredientModel('Bean', 10),
        new IngredientModel('Tomato', 10)
      ];

    getIngredients() {
        return [...this.ingredients];
    }

    addIngredient(ingredient: IngredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: IngredientModel[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}
