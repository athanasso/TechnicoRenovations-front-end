import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class UserHeaderComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.signOut();
  }
}
