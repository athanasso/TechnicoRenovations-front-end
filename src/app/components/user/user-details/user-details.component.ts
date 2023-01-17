import { LoggedUserService } from './../../../services/logged-user.service';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {

  user : any;

  constructor(private userService: UserService, private loggedUser: LoggedUserService){
    this.user = loggedUser.getUser();
  }

  deleteUser(response:any) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteOwner(response).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  updateItem(response: any) {
    this.userService.updateEmail({vatNumber: response.vatNumber, email: response.email}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updatePassword({vatNumber: response.vatNumber, password: response.password}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updateUsername({vatNumber: response.vatNumber, username: response.username}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
