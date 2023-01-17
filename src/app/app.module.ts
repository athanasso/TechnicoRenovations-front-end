import { EditRepairPageComponent } from './components/admin/repairs/edit-repair/edit-repair.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';

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
import { OwnersAndPropertiesComponent } from './components/admin/owners-and-properties/owners-and-properties.component';
import { EditOwnerPageComponent } from './components/admin/owners-and-properties/edit-owner-page/edit-owner-page.component';
import { SearchOwnerPageComponent } from './components/admin/owners-and-properties/search-owner-page/search-owner-page.component';
import { CreateOwnerPageComponent } from './components/admin/owners-and-properties/create-owner-page/create-owner-page.component';
import { AdminRepairsComponent } from './components/admin/repairs/repairs.component';
import { CreateRepairComponent } from './components/admin/repairs/create-repair/create-repair.component';
import { SearchRepairComponent } from './components/admin/repairs/search-repair/search-repair.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { PropertyDetailsComponent } from './components/user/property-details/property-details.component';
import { UserRepairsComponent } from './components/user/repairs/repairs.component';
import { EditRepairComponent } from './components/user/repairs/edit-repair/edit-repair.component';
import { EditPropertyComponent } from './components/user/property-details/edit-property/edit-property.component';
import { CreatePropertyPageComponent } from './components/admin/owners-and-properties/create-property-page/create-property-page.component';
import { SearchPropertyPageComponent } from './components/admin/owners-and-properties/search-property-page/search-property-page.component';
import { EditPropertyPageComponent } from './components/admin/owners-and-properties/edit-property-page/edit-property-page.component';

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
    RegisterComponent,
    OwnersAndPropertiesComponent,
    CreateOwnerPageComponent,
    EditOwnerPageComponent,
    SearchOwnerPageComponent,
    AdminRepairsComponent,
    CreateRepairComponent,
    SearchRepairComponent,
    UserDetailsComponent,
    PropertyDetailsComponent,
    UserRepairsComponent,
    EditRepairComponent,
    EditPropertyComponent,
    CreatePropertyPageComponent,
    SearchPropertyPageComponent,
    EditPropertyPageComponent,
    EditRepairPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
