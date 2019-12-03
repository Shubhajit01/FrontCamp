import { TestBed } from '@angular/core/testing';

import { RouteControllerService } from './route-controller.service';

describe('RouteControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteControllerService = TestBed.get(RouteControllerService);
    expect(service).toBeTruthy();
  });
});
