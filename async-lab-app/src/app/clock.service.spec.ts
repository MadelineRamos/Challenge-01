import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { ClockService } from './clock.service';
import { Observable } from 'rxjs';

describe('ClockService', () => {
  let service: ClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
