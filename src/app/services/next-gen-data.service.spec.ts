import { TestBed, inject } from '@angular/core/testing';

import { NextGenDataService } from './next-gen-data.service';

describe('NextGenDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextGenDataService]
    });
  });

  it('should be created', inject([NextGenDataService], (service: NextGenDataService) => {
    expect(service).toBeTruthy();
  }));
});
