import { LoggedUserService } from './../../../services/logged-user.service';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {

  user : any;
  currentEmail!: String;
  currentPassword!: String;
  currentUsername!: String;
  message = '';
  temp : any;

  constructor(private userService: UserService, private loggedUser: LoggedUserService){
    this.user = loggedUser.getUser();
    this.currentEmail = this.user.email;
    this.currentPassword = this.user.password;
    this.currentUsername = this.user.username;
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
    if (this.currentEmail != response.email){
      this.userService.updateEmail({vatNumber: response.vatNumber, email: response.email}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          if (err.status === 404 && err.error === "Doesn't exist") {
            alert("The email already exists");
          }
        }
      );
    }
    if (this.currentPassword != response.password){
      this.userService.updatePassword({vatNumber: response.vatNumber, password: response.password}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (this.currentUsername != response.username){
      this.userService.updateUsername({vatNumber: response.vatNumber, username: response.username}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          if (err.status === 404 && err.error === "Doesn't exist") {
            alert("The username already exists");
          }
        }
      );
    }

    this.userService.getUser().subscribe({
      next: data => {
        this.temp = data;
        this.loggedUser.setUser(this.temp.data);
      },
      error: () => this.message = "Error: Invalid credentials.",
      complete: () => this.message = "Completed..."
    });
  }
}
