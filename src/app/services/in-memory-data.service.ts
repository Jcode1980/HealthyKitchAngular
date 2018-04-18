import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {MeasuredIngredient} from '../entity/measured-ingredient';
import {DietaryCategory} from '../entity/dietary-category';
import {NutritionalBenefit} from '../entity/nutritional-benefit';
import {Rating} from '../entity/rating';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Mr. Nice', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: []},
      { id: 12, name: 'Narco', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: []},
      { id: 13, name: 'Bombasto', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 14, name: 'Celeritas', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 15, name: 'Magneta', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 16, name: 'RubberMan', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 17, name: 'Dynama', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 18, name: 'Dr IQ', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 19, name: 'Magma', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] },
      { id: 20, name: 'Tornado', nutritionalBenefits: [] , dietaryCategories: [], measuredIngredients: [],  ratings: [] }
    ];

    const mealTypes = [
      { id : 1, name: 'Breakfast'},
      { id : 2, name: 'Lunch'},
      { id : 3, name: 'Dinner'},
      { id : 4, name: 'Side Dishes'},
      { id : 5, name: 'Salad'}
    ];

    const dietaryCategories = [
    { id : 1, name: 'Gluten Free'},
    { id : 2, name: 'Vegan'},
    { id : 3, name: 'Dairy Free'}
    ];

    const nutritionalBenefits = [
      { id : 1, name: 'Anti-inflammatory'},
      { id : 2, name: 'Heart health'},
      { id : 3, name: 'Stress'}
    ];
    return {recipes, mealTypes, dietaryCategories, nutritionalBenefits};
  }


}
