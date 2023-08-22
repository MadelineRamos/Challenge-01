import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ActionsComponent } from './actions/actions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesComponent,
    SignupFormComponent,
    ActionsComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    A11yModule
  ],
  providers: [
    Title 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
