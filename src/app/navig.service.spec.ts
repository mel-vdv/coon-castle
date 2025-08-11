import { TestBed } from '@angular/core/testing';

import { NavigService } from './navig.service';

describe('NavigService', () => {
  let service: NavigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
