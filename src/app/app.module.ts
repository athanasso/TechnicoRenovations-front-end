import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UserHomeComponent } from './components/user/home/home.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { UserHeaderComponent } from './components/user/header/header.component';
import { AdminHeaderComponent } from './components/admin/header/header.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { FooterComponent } from './core/footer/footer.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    AboutusComponent,
    FooterComponent,
    NotfoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
