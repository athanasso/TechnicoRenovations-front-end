import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user-service.service';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-edit-owner-page',
  templateUrl: './edit-owner-page.component.html'
})
export class AdminEditOwnerComponent implements OnInit {

  searchQuery!: string;
  filteredResponse: any;
  users: any;
  currentUsername: any;
  currentPassword: any;
  currentEmail: any;
  message = '';

  constructor(private service: LoggedUserService,private userService: UserService, private adminService: AdminService, private loggedUser: LoggedUserService) { }

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
    this.currentEmail = this.filteredResponse.owner.email;
    this.currentPassword = this.filteredResponse.owner.password;
    this.currentUsername = this.filteredResponse.owner.username;
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
    if (this.currentEmail != item.email) {
      this.userService.updateEmail({vatNumber: item.vatNumber, email: item.email}).subscribe(
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
    // check if the password has changed
    if (this.currentPassword != item.password) {
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
    if (this.currentUsername != item.username) {
      this.userService.updateUsername({vatNumber: item.vatNumber, username: item.username}).subscribe(
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

    this.adminService.getOwners().subscribe({
      next: data => {
        this.loggedUser.setOwners(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }
}
