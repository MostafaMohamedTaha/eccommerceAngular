import { TestBed } from '@angular/core/testing';

import { PrdService } from './prd.service';

describe('PrdService', () => {
  let service: PrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
