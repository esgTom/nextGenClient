import { TestBed, inject } from '@angular/core/testing';

import { ProjectBOService } from './project-bo.service';

describe('ProjectBOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectBOService]
    });
  });

  it('should be created', inject([ProjectBOService], (service: ProjectBOService) => {
    expect(service).toBeTruthy();
  }));
});
