import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  register : any;
  response: any;
  message = '';

  constructor(private router: Router, private service: AuthServiceService, private fb: FormBuilder) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  userRegisterForm: FormGroup = this.fb.group({
    username: this.fb.control(""),
    email: this.fb.control(""),
    password: this.fb.control(""),
    vatNumber: this.fb.control(""),
    name: this.fb.control(""),
    surname: this.fb.control(""),
    address: this.fb.control(""),
    phoneNumber:this.fb.control("")
  });

  ngOnInit(): void {}

  onSubmit() {
    this.register = {
      "username": this.userRegisterForm.get("username")?.value,
      "email": this.userRegisterForm.get("email")?.value,
      "password": this.userRegisterForm.get("password")?.value,
      "vatNumber": this.userRegisterForm.get("vatNumber")?.value,
      "name": this.userRegisterForm.get("name")?.value,
      "surname": this.userRegisterForm.get("surname")?.value,
      "address": this.userRegisterForm.get("address")?.value,
      "phoneNumber": this.userRegisterForm.get("phoneNumber")?.value,
    };

    this.service.register(this.register).subscribe({
      next: data => {
        this.response = data;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
    if(this.response){
      this.router.navigate(['/login']);
    }
  }
}
