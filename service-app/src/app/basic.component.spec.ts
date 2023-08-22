import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('message property should have an initial value', () => {
    const fixture = TestBed.createComponent(BasicComponent);
    const app = fixture.componentInstance;
    expect(app.message).toEqual('msg one');
  }); 
  
  it('message property should display', () => {
    const fixture = TestBed.createComponent(BasicComponent);
    fixture.detectChanges();
    const htmlElement = fixture.nativeElement as HTMLElement;
    let displayText =  htmlElement.querySelector('p')?.textContent;
    expect(displayText).toEqual('msg one');
  });

});
