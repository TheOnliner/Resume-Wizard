import { TestBed } from '@angular/core/testing';

import { PdfresumeService } from './pdfresume.service';

describe('PdfresumeService', () => {
  let service: PdfresumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfresumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
