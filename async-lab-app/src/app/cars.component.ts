import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-cars',
  template: `<div class=bordered>
  <h1>Cars App</h1>
  <ul>
    <li *ngFor="let car of cars">{{car}}</li>
  </ul>
  </div>
  `,
  styles: [
  ]
})
export class CarsComponent implements OnInit{
  cars!:any[];

constructor(public carsService:CarsService){}

ngOnInit(): void {
  this.carsService.getCars().subscribe((data:any)=>{
    this.cars = data.cars;
  })
  }
}
