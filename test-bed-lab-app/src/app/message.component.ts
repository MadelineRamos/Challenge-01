import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div class=border>
      <h2>{{title}}</h2>
      <div class=contents>{{message}}</div>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() title: string = 'default title';
  @Input() message: string = 'default message';
}
