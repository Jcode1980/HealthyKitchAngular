import { TestBed, inject } from '@angular/core/testing';

import { NutritionalBenefitService } from './nutritional-benefit.service';

describe('NutritionalBenefitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionalBenefitService]
    });
  });

  it('should be created', inject([NutritionalBenefitService], (service: NutritionalBenefitService) => {
    expect(service).toBeTruthy();
  }));
});
