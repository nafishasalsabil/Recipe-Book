import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
   private recipes : Recipe[] = [
        new Recipe('Pasta Napolitana',
        'Loaded with flavour from tomatoes, onion, garlic and herbs', 
        'https://www.sugarsaltmagic.com/wp-content/uploads/2022/04/Pasta-Napoletana-5FEAT-680x680.jpg',[
          new Ingredient('Pasta',1),
          new Ingredient('Cheese',2)
        ]),
        new Recipe('Classic Smashed Cheeseburger',
        'A burger that is crispy on the outside, yet juicy on the inside', 
        'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1920,c_limit/Smashburger-recipe-120219.jpg',[
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)
        ])
      ];
      constructor(private slService: ShoppingListService) {}
    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}