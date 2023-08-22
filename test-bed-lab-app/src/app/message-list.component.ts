import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styles: [
  ]
})
export class MessageListComponent {
@Input() messages: string[] = ["default message one", "default message two"];

selectedMessageId: number = 0;
onNext(){
  this.selectedMessageId = ( this.selectedMessageId + 1 ) % this.messages.length;
}

onPrevious(){
  this.selectedMessageId = ( this.selectedMessageId -1 < 0 )? 0: this.selectedMessageId -1;
}
}
