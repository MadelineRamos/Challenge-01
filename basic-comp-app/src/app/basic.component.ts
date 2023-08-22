import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <p>{{message}}</p>
  `,
  styles: [
  ]
})

export class BasicComponent {
  message = 'my message...';
}
