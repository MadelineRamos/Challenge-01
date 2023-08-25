import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  username!: string;
  password!: string;
  isLoggedIn: boolean = false;
  user?: string;

  constructor(public _auth: LoginService) { }

  getAuth() {
    let a = this._auth.login(this.username, this.password)
    if (a = true) {
      this.isLoggedIn = true;
      this.user = this.username;
    } 
    console.log(a)
  }

  logout(){
    this.isLoggedIn = false;
    this.user = 'Guest';
  }
}
