import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsComponent } from './cars.component';
import { HttpClientModule } from '@angular/common/http';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ CarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
