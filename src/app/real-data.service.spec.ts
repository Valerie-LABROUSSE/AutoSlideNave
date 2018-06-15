import { TestBed, inject } from '@angular/core/testing';

import { RealDataService } from './real-data.service';

describe('RealDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealDataService]
    });
  });

  it('should be created', inject([RealDataService], (service: RealDataService) => {
    expect(service).toBeTruthy();
  }));
});
