import { TestBed, inject } from '@angular/core/testing';

import { ConditionsService } from './conditions.service';

describe('ConditionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionsService]
    });
  });

  it('should be created', inject([ConditionsService], (service: ConditionsService) => {
    expect(service).toBeTruthy();
  }));
});
