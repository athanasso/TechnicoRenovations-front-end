import { RepairsComponent } from './components/admin/repairs/repairs.component';
import { SearchRepairComponent } from './components/admin/repairs/search-repair/search-repair.component';
import { CreateRepairComponent } from './components/admin/repairs/create-repair/create-repair.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { UserHomeComponent } from './components/user/home/home.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { LoginPageComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOwnerPageComponent } from './components/admin/owners-and-properties/create-owner-page/create-owner-page.component';
import { EditOwnerPageComponent } from './components/admin/owners-and-properties/edit-owner-page/edit-owner-page.component';
import { OwnersAndPropertiesComponent } from './components/admin/owners-and-properties/owners-and-properties.component';
import { SearchOwnerPageComponent } from './components/admin/owners-and-properties/search-owner-page/search-owner-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/owners_properties', component: OwnersAndPropertiesComponent },
  { path: 'admin/owners_properties/create-owner', component: CreateOwnerPageComponent },
  { path: 'admin/owners_properties/edit-owner', component: EditOwnerPageComponent },
  { path: 'admin/owners_properties/search-owner', component: SearchOwnerPageComponent },
  { path: 'admin/repairs', component: RepairsComponent },
  { path: 'admin/repairs/create-repair', component: CreateRepairComponent },
  { path: 'admin/repairs/search-repair', component: SearchRepairComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
