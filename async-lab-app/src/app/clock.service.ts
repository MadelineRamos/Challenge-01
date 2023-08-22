import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  intervalId:any;
  constructor() { }

  startClock():Observable<string>{
    this.stopClock();
    let clock = new Observable<string>((subscriber:Subscriber<string>)=>{
      let start = new Date().getTime();
      subscriber.next("0");
      this.intervalId = setInterval(()=>{
        let milliseconds = new Date().getTime() - start;
        let num = Math.round(milliseconds/1000); 
        subscriber.next(num.toString());
      }, 1000);
    });
    return clock;
  }

  stopClock(){
    clearInterval(this.intervalId);
  }
}
