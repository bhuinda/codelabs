import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 1)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let i = 0; i < ingredients.length; i++) {
      let ingredientExists = false;

      for (let ingredient of this.ingredients) {
        if (ingredients[i].name === ingredient.name) {
          ingredient.amount += ingredients[i].amount;
          ingredientExists = true;
          break; // If ingredient exists, loop breaks to avoid unnecessary processing and the second ingredient-to-be-added is iterated through.
        }
      }

      if (!ingredientExists) {
        this.ingredients.push(ingredients[i])
      }
    }

    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
