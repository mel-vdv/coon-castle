import { TestBed } from '@angular/core/testing';

import { OpenPdfService } from './open-pdf.service';

describe('OpenPdfService', () => {
  let service: OpenPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
