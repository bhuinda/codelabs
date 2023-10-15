import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Dummy Recipe', 'This is a dummy recipe.', 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2.jpg'),
  ];
}
