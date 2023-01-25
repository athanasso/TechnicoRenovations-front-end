import { UserService } from 'src/app/services/user/user-service.service';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class AdminHomeComponent {

  user : any;
  properties : any;
  repairs : any;
  message = '';
  temp : any;

  constructor(private loggedUser: LoggedUserService,private service: AdminService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.loggedUser.getUser();
    this.properties = this.loggedUser.getProperties();
    this.repairs = this.loggedUser.getRepairs();
  }

  sync(){
    this.userService.getUser(this.user.vatNumber).subscribe({
      next: data => {
        this.temp = data;
        this.loggedUser.setUser(this.temp.data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.service.getProperties().subscribe({
      next: data => {
        this.loggedUser.setProperties(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.service.getPropertyRepairs().subscribe({
      next: data => {
        this.loggedUser.setRepairs(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        this.message = "Completed...";
      }
    });

    this.service.getOwners().subscribe({
      next: data => {
        this.loggedUser.setOwners(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }
}
