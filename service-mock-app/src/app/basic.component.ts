import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-basic',
  template: `<div class=boxed> 
  <p >{{message}}</p>
  <button (click)="getNextMessage()" >
  Get Next Message</button></div>
  `,
  styles: []
})

export class BasicComponent {
  message!: string;
  constructor(public msgSrv: MessageService) {
    this.message = this.msgSrv.getMessage();
  }
  getNextMessage() {
    this.msgSrv.setNext();
    this.message = this.msgSrv.getMessage();
  }

}
