import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../entity/recipe';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnInit {
  @Input() currentRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
