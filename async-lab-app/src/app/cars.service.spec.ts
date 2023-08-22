import { TestBed, fakeAsync, inject, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';

function returnDataAfterDelay(data: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  })
}

describe('CarsService', () => {
  let service: CarsService;
  let numCars = 0;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return data from network source', (done) => {
    let observable = service.getCars().subscribe((data: any) => {
      numCars = data.cars.length;
      expect(numCars).toBeGreaterThan(0);
      done();
    });
  });

  it('numCars should be greater than zero', () => {
    expect(numCars).toBeGreaterThan(0);
  });


});
