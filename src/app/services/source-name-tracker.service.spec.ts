import { TestBed } from '@angular/core/testing';

import { SourceNameTrackerService } from './source-name-tracker.service';

describe('SourceNameTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourceNameTrackerService = TestBed.get(SourceNameTrackerService);
    expect(service).toBeTruthy();
  });
});
