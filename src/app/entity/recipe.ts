import {MealType} from './meal-type';
import {NutritionalBenefit} from './nutritional-benefit';
import {Rating} from './rating';
import {MeasuredIngredient} from './measured-ingredient';
import {DietaryCategory} from './dietary-category';

export class Recipe {
  id:  number;
  name: string;
  descText: string;
  mealTypes: MealType[];
  nutritionalBenefits: NutritionalBenefit[];
  measuredIngredients: MeasuredIngredient[];
  dietaryCaregories: DietaryCategory[];
  ratings: Rating[];
}
