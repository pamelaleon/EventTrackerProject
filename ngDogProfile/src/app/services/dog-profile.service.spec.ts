import { TestBed } from '@angular/core/testing';

import { DogProfileService } from './dog-profile.service';

describe('DogProfileService', () => {
  let service: DogProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
