import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggedUserService } from '../services/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  user: any;

  constructor(private service: LoggedUserService, private router: Router) {}

  canActivate(): boolean {
    this.user = this.service.getUser();
    if (this.user && this.user.typeOfUser=="admin"){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
