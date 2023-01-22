import { TestBed } from '@angular/core/testing';

import { LangusService } from './langus.service';

describe('LangusService', () => {
  let service: LangusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
