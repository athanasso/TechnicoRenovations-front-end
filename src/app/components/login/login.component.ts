import { AuthServiceService } from './../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html'
})
export class LoginPageComponent implements OnInit {

  public user: any;
  login : any;
  message = '';

  constructor(private router: Router, private service: AuthServiceService, private fb: FormBuilder) {}

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

    if (this.user && this.user.typeOfUser=="user"){
      this.router.navigate(['user/home']);
    }
    if (this.user && this.user.typeOfUser=="admin"){
      this.router.navigate(['admin/home']);
    }
  }
}
