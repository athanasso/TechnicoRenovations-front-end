import { EditPropertyComponent } from './components/user/property-details/edit-property/edit-property.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { EditRepairComponent } from './components/user/repairs/edit-repair/edit-repair.component';
import { PropertyDetailsComponent } from './components/user/property-details/property-details.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { AdminRepairsComponent } from './components/admin/repairs/repairs.component';
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
import { UserRepairsComponent } from './components/user/repairs/repairs.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'user/home', component: UserHomeComponent, canActivate: [UserGuard]},
  { path: 'user/user-details', component: UserDetailsComponent, canActivate: [UserGuard]},
  { path: 'user/property-details', component: PropertyDetailsComponent, canActivate: [UserGuard] },
  { path: 'user/property-details/edit', component: EditPropertyComponent, canActivate: [UserGuard] },
  { path: 'user/repairs', component: UserRepairsComponent, canActivate: [UserGuard] },
  { path: 'user/repairs/edit', component: EditRepairComponent, canActivate: [UserGuard] },
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties', component: OwnersAndPropertiesComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/create-owner', component: CreateOwnerPageComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/edit-owner', component: EditOwnerPageComponent, canActivate: [AdminGuard] },
  { path: 'admin/owners_properties/search-owner', component: SearchOwnerPageComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs', component: AdminRepairsComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs/create-repair', component: CreateRepairComponent, canActivate: [AdminGuard] },
  { path: 'admin/repairs/search-repair', component: SearchRepairComponent, canActivate: [AdminGuard] },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
