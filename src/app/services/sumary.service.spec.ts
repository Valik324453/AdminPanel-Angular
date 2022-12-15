import { TestBed } from '@angular/core/testing';

import { SumaryService } from './sumary.service';

describe('SumaryService', () => {
  let service: SumaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
