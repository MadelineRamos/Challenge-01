import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  customers: Array<any> = [];

  constructor(public _customerService: CustomerService, public _auth: LoginService) { }
  display = this._auth.isLoggedIn

  ngOnInit(){
    this._customerService.getCustomers().subscribe({
      next: (customers) => {
        for (const customer of customers) {
          console.log(customer);
          const { id, first_name, last_name, email, phone, purchase_total, salesperson} = customer;
          const newCustomer = {
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            purchase_total: purchase_total,
            salesperson: salesperson
          }
          this.customers.push(newCustomer)
        }
      }
    });
    console.log(this.customers);
  }
}
