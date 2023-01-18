import { UserRegisterPropertyComponent } from './components/user/property-details/register-property/register-property.component';
import { AdminSearchPropertyComponent } from './components/admin/owners-and-properties/search-property-page/search-property-page.component';
import { AdminEditPropertyComponent } from './components/admin/owners-and-properties/edit-property-page/edit-property-page.component';
import { AdminCreatePropertyComponent } from './components/admin/owners-and-properties/create-property-page/create-property-page.component';
import { UserEditPropertyComponent } from './components/user/property-details/edit-property/edit-property.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { UserEditRepairComponent } from './components/user/repairs/edit-repair/edit-repair.component';
import { UserPropertyDetailsComponent } from './components/user/property-details/property-details.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { AdminRepairsComponent } from './components/admin/repairs/repairs.component';
import { AdminSearchRepairComponent } from './components/admin/repairs/search-repair/search-repair.component';
import { AdminCreateRepairComponent } from './components/admin/repairs/create-repair/create-repair.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { UserHomeComponent } from './components/user/home/home.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { LoginPageComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreateOwnerComponent } from './components/admin/owners-and-properties/create-owner-page/create-owner-page.component';
import { AdminEditOwnerComponent } from './components/admin/owners-and-properties/edit-owner-page/edit-owner-page.component';
import { AdminOwnersAndPropertiesComponent } from './components/admin/owners-and-properties/owners-and-properties.component';
import { AdminSearchOwnerComponent } from './components/admin/owners-and-properties/search-owner-page/search-owner-page.component';
import { UserRepairsComponent } from './components/user/repairs/repairs.component';
import { EditRepairPageComponent } from './components/admin/repairs/edit-repair/edit-repair.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'user/home', component: UserHomeComponent, canActivate: [UserGuard]},
  { path: 'user/user-details', component: UserDetailsComponent, canActivate: [UserGuard]},
  { path: 'user/property-details', component: UserPropertyDetailsComponent, canActivate: [UserGuard] },
  { path: 'user/property-details/edit', component: UserEditPropertyComponent, canActivate: [UserGuard] },
  { path: 'user/property-details/register', component: UserRegisterPropertyComponent, canActivate: [UserGuard] },
  { path: 'user/repairs', component: UserRepairsComponent, canActivate: [UserGuard] },
  { path: 'user/repairs/edit', component: UserEditRepairComponent, canActivate: [UserGuard] },
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties', component: AdminOwnersAndPropertiesComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/create-owner', component: AdminCreateOwnerComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/edit-owner', component: AdminEditOwnerComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/search-owner', component: AdminSearchOwnerComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/create-property', component: AdminCreatePropertyComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/edit-property', component: AdminEditPropertyComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/search-property', component: AdminSearchPropertyComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs', component: AdminRepairsComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs/create-repair', component: AdminCreateRepairComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs/search-repair', component: AdminSearchRepairComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs/edit-repair', component: EditRepairPageComponent, canActivate: [AdminGuard] },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
