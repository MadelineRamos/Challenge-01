import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicComponent } from './basic.component';
import { MessageService } from './message.service';

class MockMessageService {
  msgRoot:string = "mock";
  msgIdx:number = 1;
  getMessage(){return this.msgRoot + "-" + this.msgIdx;}
  setNext(){ this.msgIdx = this.msgIdx + 1;}
 } 

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicComponent]
      , providers: [{
        provide: MessageService,
        useValue: new MockMessageService()
      }]
    }).compileComponents();
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => { 
    expect(component).toBeTruthy(); 
  });

  it('message property should have initial value', () => { 
    let message = component.msgSrv.getMessage();
    expect(message).toEqual('mock-1'); 
  });

  it('message property should be displayed', () => {
    fixture.detectChanges();
    let messageProperty = component.msgSrv.getMessage();
    let displayMsg = fixture.nativeElement.querySelector('p')?.innerHTML;
    expect(displayMsg).toEqual(messageProperty);
  });

  it('new message is displayed after button click', () => {
    fixture.detectChanges();
    let msg01 = fixture.nativeElement.querySelector('p')?.innerHTML;
    component.getNextMessage();
    fixture.detectChanges();
    let msg02 = fixture.nativeElement.querySelector('p')?.innerHTML;
    expect(msg01).not.toEqual(msg02);
  });
});
