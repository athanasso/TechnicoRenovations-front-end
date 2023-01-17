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
    if (item.email) {
      this.userService.updateEmail({vatNumber: item.vatNumber, email: item.email}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    // check if the password has changed
    if (item.password) {
      this.userService.updatePassword({vatNumber: item.vatNumber, password: item.password}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    // check if the username has changed
    if (item.username) {
      this.userService.updateUsername({vatNumber: item.vatNumber, username: item.username}).subscribe(
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
