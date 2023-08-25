import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortByTotalPipe } from './customer/sort-by-total.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FormsModule
  ],
  providers: [ SortByTotalPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
