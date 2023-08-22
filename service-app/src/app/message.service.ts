import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messages = ["msg one", "msg two", "msg three"]; 
  private currentId = 0;
  getMessage(){ return this.messages[this.currentId];}
  setNext(){
    this.currentId = ++this.currentId % this.messages.length;
  }  
}
