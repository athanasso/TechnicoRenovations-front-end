import { UserServiceService } from './../../../services/user/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class UserHomeComponent implements OnInit{

  response: any;
  message = '';

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.service.getProperties().subscribe({
      next: data => {
        this.response = data;
        console.log(this.response);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }

}
