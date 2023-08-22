import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessages(){ return this.messages;}

  messages = [
    "Have a nice day!",
    "The truth will set you free!",
    "Every day is a good day!",
    "Just be you. Everyone else is taken!",
    "Slow and steady wins the race!",
    "Stop and smell the roses!",
    "Be the best that you can be!",
    "Enjoy the little things!",
    "Smile and the whole world smiles with you"
  ]
}
