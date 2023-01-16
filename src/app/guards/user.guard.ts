import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  user: any;

  constructor(private service: LoggedUserService, private router: Router) {}

  canActivate(): boolean {
    this.user = this.service.getUser();
    if (this.user && this.user.typeOfUser=="user"){
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
