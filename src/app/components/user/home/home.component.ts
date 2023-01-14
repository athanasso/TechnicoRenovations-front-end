import { UserServiceService } from './../../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class UserHomeComponent implements OnInit{

  response: any;
  message = '';
  user : any;

  constructor(private service: UserServiceService, private loggedUser: LoggedUserService){
    this.user = loggedUser.data;
  }

  ngOnInit(): void {
    this.service.getRepairs().subscribe({
      next: data => {
        this.response = data;
        this.response = this.response.data;
        console.log(this.response);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }
}
