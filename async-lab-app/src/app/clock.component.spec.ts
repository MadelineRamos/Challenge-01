import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ClockComponent } from './clock.component';
import { By } from '@angular/platform-browser';

function returnDataAfterDelay(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  })
}

function delay(duration: number) {
  return new Promise((resolve, reject) => {
    setInterval(async () => {
      resolve(true)
    }, duration);
  })
}

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test method that returns a promise', async () => {
    const data = "default value";
    let promise = returnDataAfterDelay(data);
    let result = await promise;
    expect(result).toBe(data);
  })

  it('clock should increment in template', async () => {
    fixture.detectChanges();
    await delay(2000);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('#clock'));
    const value = +element.nativeElement.innerText;
    expect(value).toBeGreaterThan(1);
  });

  it('verify a delayed value change', fakeAsync((): void => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    tick(100)
    expect(flag).toBe(true);
  }));

});