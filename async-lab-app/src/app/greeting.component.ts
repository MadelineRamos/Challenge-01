import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<div class=bordered>
  <h1>Greeting App</h1>
  Enter Name: <input type=text id=name size=10
    [(ngModel)]='name' >
  <p>{{message}}</p>
  <button (click)="handleClick()">Update</button>
  </div>`,
  styles: []
})
export class GreetingComponent {
  name='jack';
  message="default message";
  handleClick(){ this.message=`hello ${this.name}`;}
}
