import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LoginService } from 'src/app/login.service';
import { SortByTotalPipe } from '../sort-by-total.pipe';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent {
  customers: Array<any> = [];
  purchase_total!: number;

  constructor(public _customerService: CustomerService, public _loginService: LoginService, public _pipe: SortByTotalPipe) { }
  display = this._loginService.isLoggedIn
  salesPerson = this._loginService.userName
  total = this._customerService.purchase_total

  ngOnInit() {
    this._customerService.getBySalesperson(this._loginService.userName).subscribe({
      next: (customer) => {
        for (let c of customer) {
          this.customers.push(c);
        }
        this.purchase_total = this._customerService.purchase_total;
      }
    });
    console.log(this.customers);
  }
}
