import { LoggedUserService } from './../../services/logged-user.service';
import { AuthServiceService } from './../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html'
})
export class LoginPageComponent implements OnInit {

  user: any;
  properties: any;
  repairs: any;
  login : any;
  message = '';

  constructor(private router: Router, private service: AuthServiceService, private fb: FormBuilder, private loggedUser: LoggedUserService,private userService: UserServiceService) {}

  userLoginForm: FormGroup = this.fb.group({
    username: this.fb.control(""),
    password: this.fb.control(""),
  });

  goToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.login = {
      "username": this.userLoginForm.get("username")?.value,
      "password": this.userLoginForm.get("password")?.value
    };

    this.service.getUser(this.login).subscribe({
      next: data => {
        this.user = data;
        console.log(this.user);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.loggedUser.user = this.user;

    if (this.user.typeOfUser=="user"){
      this.properties = this.userService.getProperties();
      this.repairs = this.userService.getRepairs();
      this.router.navigate(['user/home']);
    }
    if (this.user.typeOfUser=="admin"){
      this.router.navigate(['admin/home']);
    }
  }
}
