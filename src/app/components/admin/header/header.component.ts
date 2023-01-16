import { AuthService } from './../../../services/auth/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminHeaderComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor(private authService: AuthService) {}

  showDropdown1 = false;
  showDropdown2 = false;

  signOut() {
    this.authService.signOut();
  }
}
