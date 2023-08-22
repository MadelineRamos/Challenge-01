import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // assign a value to the service instance
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    // check that service instance evaluates to true
    expect(service).toBeTruthy();
  }); 
});
