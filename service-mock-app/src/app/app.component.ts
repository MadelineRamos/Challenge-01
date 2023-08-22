import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
template: `<h1>{{title}}</h1>
<div class=content>
  <span>{{title}} is running!</span>
  <br/><br/>
  <app-basic></app-basic>
</div>`,
  styles: []
})
export class AppComponent {
  title = 'service-mock-app';
}
