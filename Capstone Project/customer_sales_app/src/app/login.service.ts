import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService implements CanActivate {
  users: Array<any> = [
    {username: "Cindy", password: "Cindy"},
    {username: "Steve", password: "Steve"}
  ];

  isLoggedIn: boolean = false;
  userName: string = 'Guest';

  constructor() { }

  login(username: string, password: string): any {
    for (const user of this.users){
      console.log(user);
      if(user.username === username && user.password === password){
        this.userName = user.username;
        this.isLoggedIn = true;
      }
    }
  }

  canActivate() {
    return this.isLoggedIn;
  }
}
