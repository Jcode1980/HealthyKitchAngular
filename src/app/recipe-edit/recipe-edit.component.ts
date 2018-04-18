import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Recipe} from '../entity/recipe';
import {RecipeService} from '../services/recipe.service';
import {MealType} from '../entity/meal-type';
import {MealTypeService} from '../services/meal-type.service';
import {NutritionalBenefit} from '../entity/nutritional-benefit';
import {DietaryCategory} from '../entity/dietary-category';
import {DietaryCategoryService} from '../services/dietary-category.service';
import {NutritionalBenefitService} from '../services/nutritional-benefit.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: Recipe;
  mealTypes: MealType[];
  nutritionalBenefits: NutritionalBenefit[];
  dietaryCategories: DietaryCategory[];
  mealTypeDropdownSettings = {};
  nutritionalBenefitDropdownSetting = {};
  dietaryCategoryDropdownSettings = {};
  metricDropdownSettings = {};

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private mealTypeService: MealTypeService,
    private dietaryCatgoryService: DietaryCategoryService,
    private nutritionalBenefitService: NutritionalBenefitService
  ) {}

  ngOnInit(): void {
    // Set Default Values
    this.mealTypes = [
      { id : 1, name: 'Breakfast'},
    ];

    this.dietaryCategories = [
      { id : 1, name: 'Gluten Free'}
    ];

    this.nutritionalBenefits = [
      { id : 1, name: 'Anti-inflammatory'}
    ];

    this.getRecipe();
    this.getMealTypes();
    this.getDietaryCategories();
    this.getNutirionalBenefits();

    this.initalizeMealtTypeDropDown();
    this.initializeNutritionalBenefitDropDown();
    this.initializeDietaryCategoryDropDown();
    this.initializeMetricDropDown();
    console.log(this.mealTypeDropdownSettings);


    this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
    this.selectedItems = [
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text:"Select Countries",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"myclass custom-class"
    };
  }

  private initalizeMealtTypeDropDown() {
    this.mealTypeDropdownSettings = this.baseDropDownSettings();
    this.mealTypeDropdownSettings['text'] = 'Select Meal Type';
  }

  private initializeNutritionalBenefitDropDown() {
    this.nutritionalBenefitDropdownSetting = this.baseDropDownSettings();
    this.nutritionalBenefitDropdownSetting['text'] = 'Select Nutritional Benefit';
  }

  private initializeDietaryCategoryDropDown() {
    this.dietaryCategoryDropdownSettings = this.baseDropDownSettings();
    this.dietaryCategoryDropdownSettings['text'] = 'Select Category';
  }

  private initializeMetricDropDown() {
    this.metricDropdownSettings = this.baseDropDownSettings();
    this.metricDropdownSettings['text'] = ' ';
  }


  private baseDropDownSettings() {
    return {     selectAllText: 'Select All',
      singleSelection : false,
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      labelKey: 'name'};
  }

  getMealTypes(): void {
    this.mealTypeService.getMealTypes().subscribe(mealTypes => this.setMealTypes(mealTypes));
  }

  setMealTypes(mealTypes: MealType[]): void {
    this.mealTypes = mealTypes;
    console.log('meal Types settting with : ' +  this.mealTypes);
  }

  getDietaryCategories(): void {
    console.log('getDietaryCategories called');
    this.dietaryCatgoryService.getDietaryCategories().subscribe(dietaryCategories => this.dietaryCategories = dietaryCategories);
    //  this.dietaryCategories = [
    //   { id : 1, name: 'Gluten Free'},
    //   { id : 2, name: 'Vegan'},
    //   { id : 3, name: 'Dairy Free'}
    // ];
  }

  getNutirionalBenefits(): void {
     this.nutritionalBenefitService.getNutritionalBenefits().subscribe(nutritionalBenefits =>
       this.nutritionalBenefits = nutritionalBenefits);
  }



  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => this.goBack());
  }

  uploadImage(): void {
    console.log('Uploading image here');
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.recipe.mealTypes);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.recipe.mealTypes);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }

}
