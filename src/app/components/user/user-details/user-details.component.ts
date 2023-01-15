import { LoggedUserService } from './../../../services/logged-user.service';
import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {

  user : any;

  constructor(private userService: UserServiceService, private loggedUser: LoggedUserService){
    this.user = loggedUser.user;
  }

  deleteUser(response:any) {
    this.userService.deleteOwner(response).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateItem(response: any) {
    this.userService.updateEmail(response).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updatePassword(response).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updateUsername(response).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
