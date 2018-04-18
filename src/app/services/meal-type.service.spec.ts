import { TestBed, inject } from '@angular/core/testing';

import { MealTypeService } from './meal-type.service';

describe('MealTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealTypeService]
    });
  });

  it('should be created', inject([MealTypeService], (service: MealTypeService) => {
    expect(service).toBeTruthy();
  }));
});
