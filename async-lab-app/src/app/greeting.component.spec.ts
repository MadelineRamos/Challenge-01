import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button click changes message: starter', () => {
    let btnDbgElmnt = fixture.debugElement.query(By.css('button'));
    btnDbgElmnt.triggerEventHandler("click");
    fixture.detectChanges();
    let value = fixture.nativeElement.querySelector('p').innerHTML;
    expect(value).not.toContain("default");
  });



});