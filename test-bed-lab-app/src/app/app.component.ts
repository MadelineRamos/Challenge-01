import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  project = 'test-bed-lab-app';
  title = 'Test Bed Lab App';
  messages:string[];

  constructor(public msgSrv:MessageService ){
    this.messages = msgSrv.getMessages();
  }

}
