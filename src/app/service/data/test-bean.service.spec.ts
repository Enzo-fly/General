import { TestBed } from '@angular/core/testing';

import { TestBeanService } from './test-bean.service';

describe('TestBeanService', () => {
  let service: TestBeanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBeanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
