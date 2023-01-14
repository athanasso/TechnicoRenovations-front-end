import { Component } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminHeaderComponent {
  showDropdown1 = false;
  showDropdown2 = false;
}
