import { UserService } from './../../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class UserHomeComponent implements OnInit{

  user : any;
  properties : any;
  repairs : any;

  constructor(private loggedUser: LoggedUserService){}

  ngOnInit(): void {
    this.user = this.loggedUser.getUser();
    this.properties = this.loggedUser.getProperties().data;
    this.repairs = this.loggedUser.getRepairs().data;
  }
}
