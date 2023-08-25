import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer/customer.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "account", component: AccountComponent},
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
