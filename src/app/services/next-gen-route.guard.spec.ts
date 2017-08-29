import { TestBed, async, inject } from '@angular/core/testing';

import { NextGenRouteGuard } from './next-gen-route.guard';

describe('NextGenRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NextGenRouteGuard]
    });
  });

  it('should ...', inject([NextGenRouteGuard], (guard: NextGenRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
