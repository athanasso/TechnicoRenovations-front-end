import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  register : any;
  response: any;
  message = '';

  constructor(private router: Router, private service: AuthService, private fb: FormBuilder) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  userRegisterForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    vatNumber: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  ngOnInit(): void {}

  onSubmit() {
    if(this.userRegisterForm.valid){
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
        error: er =>{
          if (er.status === 404 && er.error === 'Invalid Credentials') {
            alert("The user already exists");
          } else {
            this.router.navigate(['/login']);
          }
        },
        complete: () => this.message = "Completed..."
      });
    }
  }
}
