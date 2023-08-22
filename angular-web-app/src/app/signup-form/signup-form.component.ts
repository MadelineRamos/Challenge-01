import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {

  constructor(private liveAnnouncer: LiveAnnouncer) {}

  btnSubmit(event:Event){
    this.liveAnnouncer.announce("from submitted");
    console.log('signup button clicked');
    event.preventDefault();
  }

  btnCancel(){
    alert('cancel button clicked');
  }

}
