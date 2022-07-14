import { TestBed } from '@angular/core/testing';

import { MetaplexServiceService } from './metaplex-service.service';

describe('MetaplexServiceService', () => {
  let service: MetaplexServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaplexServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
