import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageListComponent, MessageComponent ]
    })
    .compileComponents();

    // assign values to 'fixture' and 'component'
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;

    // add code to force detection of changes 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
