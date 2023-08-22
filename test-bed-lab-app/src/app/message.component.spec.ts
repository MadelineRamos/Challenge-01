import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { By } from '@angular/platform-browser';

describe('MessageComponent', () => {
  let msgComp: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // add code to configure testing module
    })
    .compileComponents();

    // assign values to 'fixture' and 'component'
    fixture = TestBed.createComponent(MessageComponent);
    msgComp = fixture.componentInstance;
    
    // add code to force detection of changes
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(msgComp).toBeTruthy();
  });

  it('should have default message', () => {
    let initialMessage = msgComp.message;
    // create expectation that checks initialMessage against 
    // the "message" property value
    expect(initialMessage).toEqual(msgComp.message);
    
  });
  
  it('should have H2 title text', () => {
    let nativeElement = fixture.nativeElement;
    // get a variable pointing to the <h2> element
    let h2el = nativeElement.getElementsByTagName('h2')[0];

    // check the innerHTML of the <h2> element against 
    // the component's "title" property
    expect( h2el.innerHTML ).toEqual( msgComp.title );
    
  });


  it('new message is displayed after property change', () => {
    msgComp.message = "new message";
    fixture.detectChanges();
    let msgEl = fixture.debugElement.query(By.css('.contents'));
    fixture.debugElement.queryAll(By.css('.contents')) // this line is not needed since the info is provided above
    let newlyDisplayedMessage = msgEl.nativeElement.innerHTML;
    expect(newlyDisplayedMessage).toEqual("new message");
  }); 
  
});

