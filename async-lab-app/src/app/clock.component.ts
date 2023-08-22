import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-clock',
  template: `<div class=bordered>
  <h1>Clock App</h1>
  <button (click)="clockSrv.stopClock()">Stop</button>
  <button (click)="startClock()">Start</button>
  <p id=clock >{{clockValue}}</p>
  </div>
  `,
  styles: [
  ]
})
export class ClockComponent implements OnInit {
  title = 'async-lab-app';
  clock$!:Observable<string>;
  clockValue:number = -1;

  constructor(public clockSrv:ClockService){}

  ngOnInit(): void { 
    this.startClock();
  }
  
  startClock(){ 
    this.clockSrv.startClock().subscribe((value)=>{
      this.clockValue = +value;
    });
  }

}
