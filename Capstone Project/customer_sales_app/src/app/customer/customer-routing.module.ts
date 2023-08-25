import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { LoginService } from '../login.service';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  {path: "customer", component: CustomerComponent,
    children: [
      { path: "", component: CustomerListComponent },
      { path: "customer-list", component: CustomerListComponent, canActivate: [LoginService] },
      { path: "my-accounts", component: MyAccountsComponent, canActivate: [LoginService] }
    ]
  },
  { path: "**", component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
