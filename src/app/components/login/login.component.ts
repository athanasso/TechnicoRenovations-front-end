import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) {

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {}
}
