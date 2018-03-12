import { IngredientModel } from '../shared/models/ingredient.model';

export class RecipeModel {
    private _id: string;
    get id() {
        return this._id;
    }
    name: string;
    description: string;
    imagePath: string;
    ingredients: IngredientModel[];

    constructor(name: string, description: string, imagePath: string, ingredients: IngredientModel[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.createSlugId();
    }

    private createSlugId() {
        this._id = this.name.replace(/^\s+|\s+$/g, ''); // trim
        this._id = this._id.toLowerCase();

        // remove accents, swap ñ for n, etc
        const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
        const to   = 'aaaaeeeeiiiioooouuuunc------';
        for (let i = 0, l = from.length ; i < l ; i++) {
          this._id = this._id.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
        this._id = this._id.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                          .replace(/\s+/g, '-') // collapse whitespace and replace by -
                          .replace(/-+/g, '-'); // collapse dashes
    }
}
