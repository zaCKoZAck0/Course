import { TestBed } from '@angular/core/testing';

import { CoursedaoService } from './coursedao.service';

describe('CoursedaoService', () => {
  let service: CoursedaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursedaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
