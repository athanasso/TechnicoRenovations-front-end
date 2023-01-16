import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-owner-page',
  templateUrl: './edit-owner-page.component.html'
})
export class EditOwnerPageComponent implements OnInit {

  searchQuery!: string;
  filteredResponse: any;
  users: any;

  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  usernameControl = new FormControl('');

  constructor(private service: LoggedUserService,private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.service.getOwners();
  }

   search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.users.data;
    } else {
      this.filteredResponse = this.users.data.filter((owner: { email: string; vatNumber: number; }) => {
        return owner.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        || owner.vatNumber == parseInt(this.searchQuery);
      });
    }
    this.emailControl.setValue(this.filteredResponse.email);
    this.passwordControl.setValue(this.filteredResponse.password);
    this.usernameControl.setValue(this.filteredResponse.username);
  }

  deleteUser(item:any) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteOwner(item).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  updateItem(item: any) {
    // check if the email has changed
    if (this.emailControl.value && this.emailControl.valid && this.emailControl.touched && this.emailControl.value !== item.email) {
      this.userService.updateEmail({email: this.emailControl.value}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    // check if the password has changed
    if (this.passwordControl.value && this.passwordControl.valid && this.passwordControl.touched && this.passwordControl.value !== item.password) {
      this.userService.updatePassword({password: this.passwordControl.value}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    // check if the username has changed
    if (this.usernameControl.value && this.usernameControl.valid && this.usernameControl.touched && this.usernameControl.value !== item.username) {
      this.userService.updateUsername({username: this.usernameControl.value}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
