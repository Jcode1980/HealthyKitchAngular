import { TestBed, inject } from '@angular/core/testing';

import { DietaryCategoryService } from './dietary-category.service';

describe('DietaryCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DietaryCategoryService]
    });
  });

  it('should be created', inject([DietaryCategoryService], (service: DietaryCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
