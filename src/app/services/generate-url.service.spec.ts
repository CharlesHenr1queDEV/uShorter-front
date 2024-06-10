import { TestBed } from '@angular/core/testing';

import { GenerateUrlService } from './generate-url.service';

describe('GenerateUrlService', () => {
  let service: GenerateUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
