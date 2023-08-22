import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService tests', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('service should instantiate', () => {
    expect(service).toBeTruthy();
  });

  it('getMessage() should return the current message', () => {
    let message = service.getMessage();
    expect(message).toBe('msg one');
  })

  it('setNext() should update the current message', () => {
    let message1 = service.getMessage();
    expect(message1).toBe('msg one');
    service.setNext();
    let message2 = service.getMessage();
    expect(message2).toBe('msg two');
  })

  it('setNext() should cycle back to the first message', () => {
    service.setNext();
    service.setNext();
    service.setNext();
    let message4 = service.getMessage();
    expect(message4).toBe('msg one');
  })

});
