import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class AdminHomeComponent {

  user : any;
  properties : any;
  repairs : any;

  constructor(private loggedUser: LoggedUserService) { }

  ngOnInit(): void {
    this.user = this.loggedUser.getUser();
    this.properties = this.loggedUser.getProperties();
    this.repairs = this.loggedUser.getRepairs();
  }
}
