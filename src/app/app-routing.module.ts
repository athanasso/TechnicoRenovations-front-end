import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { UserHomeComponent } from './components/user/home/home.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { AboutusComponent } from './core/aboutus/aboutus.component';
import { LoginPageComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
