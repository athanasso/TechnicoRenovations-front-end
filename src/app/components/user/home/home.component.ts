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
  message = '';
  temp : any;

  constructor(private loggedUser: LoggedUserService, private service: UserService){}

  ngOnInit(): void {
    this.user = this.loggedUser.getUser();
    this.properties = this.loggedUser.getProperties().data;
    this.repairs = this.loggedUser.getRepairs().data;
  }

  sync(){
    this.service.getUser(this.user.vatNumber).subscribe({
      next: data => {
        this.temp = data;
        this.loggedUser.setUser(this.temp.data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.service.getProperties(this.user.vatNumber).subscribe({
      next: data => {
        this.loggedUser.setProperties(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.service.getRepairs(this.user.vatNumber).subscribe({
      next: data => {
        this.loggedUser.setRepairs(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        this.message = "Completed...";
      }
    });
    this.user = this.loggedUser.getUser();
    this.properties = this.loggedUser.getProperties().data;
    this.repairs = this.loggedUser.getRepairs().data;
  }
}
