import { TestBed } from '@angular/core/testing';

import { NgxTestLibService } from './ngx-test-lib.service';

describe('NgxTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTestLibService = TestBed.get(NgxTestLibService);
    expect(service).toBeTruthy();
  });
});
