import { TestBed } from '@angular/core/testing';

import { StandigsService } from './standigs.service';

describe('StandigsService', () => {
  let service: StandigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
