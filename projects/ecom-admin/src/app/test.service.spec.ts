import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('should add 2 number', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add(5, 10)).toBe(15);
  });
});
