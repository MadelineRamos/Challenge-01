import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list.component';
import { MessageComponent } from './message.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageListComponent,
        MessageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Test Bed Lab App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // edit the expectation below so that it tests the value of 
    // the title property against the string 'Test Bed Lab App'
    expect(app.title).toBe('Test Bed Lab App');

  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // add test code here that checks if the text rendered in
    // the <h1> tag is the same as the component's title property
    fixture.detectChanges();
    let h1tag = fixture.debugElement.query(By.css('.content h1'));
    let h1tagtext = h1tag.nativeElement.innerHTML;
    expect(h1tagtext).toBe(app.title);
  });

});
