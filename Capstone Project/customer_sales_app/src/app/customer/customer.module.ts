import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    MyAccountsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
