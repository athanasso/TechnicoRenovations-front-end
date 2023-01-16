import { LoggedUserService } from './../../services/logged-user.service';
import { AuthService } from './../../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';
import { AdminService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html'
})
export class LoginPageComponent implements OnInit {

  owners: any;
  user: any;
  login : any;
  error = '';
  success = '';
  message = '';

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder, private loggedUser: LoggedUserService,private userService: UserService,private adminService: AdminService) {}

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

    this.auth.getUser(this.login).subscribe({
      next: data => {
        this.loggedUser.setUser(data);
        this.user = this.loggedUser.getUser();
        this.loadUserSettings();
      },
      error: er => {
        this.error = "Error: Invalid credentials.";
      },
      complete: () => {
        if (!this.loggedUser.getUser()) {
          this.error = "Error: Invalid credentials.";
        } else {
          this.success = "Logining in...";
        }
      }
    });
  }

  loadUserSettings(){
    if (this.user) {
      if (this.user.typeOfUser=="user"){
        this.userService.getProperties(this.user.vatNumber).subscribe({
          next: data => {
            this.loggedUser.setProperties(data);
          },
          error: er => this.message = "Error" + er.message,
          complete: () => this.message = "Completed..."
        });

        this.userService.getRepairs(this.user.vatNumber).subscribe({
          next: data => {
            this.loggedUser.setRepairs(data);
          },
          error: er => this.message = "Error" + er.message,
          complete: () => {
            this.message = "Completed...";
            this.router.navigate(['user/home']);
          }
        });
      }

      if (this.user.typeOfUser=="admin"){
        this.adminService.getProperties().subscribe({
          next: data => {
            this.loggedUser.setProperties(data);
          },
          error: er => this.message = "Error" + er.message,
          complete: () => this.message = "Completed..."
        });

        this.adminService.getPropertyRepairs().subscribe({
          next: data => {
            this.loggedUser.setRepairs(data);
          },
          error: er => this.message = "Error" + er.message,
          complete: () => {
            this.message = "Completed...";
            this.router.navigate(['admin/home']);
          }
        });

        this.adminService.getOwners().subscribe({
          next: data => {
            this.loggedUser.setOwners(data);
          },
          error: er => this.message = "Error" + er.message,
          complete: () => this.message = "Completed..."
        });
      }
    }
  }
}
