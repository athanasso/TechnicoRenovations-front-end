import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-edit-owner-page',
  templateUrl: './edit-owner-page.component.html'
})
export class EditOwnerPageComponent implements OnInit {

  searchQuery!: string;
  response: any;
  filteredResponse: any;
  message = '';

  constructor(private adminService: AdminServiceService,private userService: UserServiceService) { }

  ngOnInit(): void {
    this.adminService.getOwners().subscribe({
      next: data => {
        this.response = data;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }

   search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.response.data;
    } else {
      this.filteredResponse = this.response.data.filter((owner: { email: string; vatNumber: number; }) => {
        return owner.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        || owner.vatNumber == parseInt(this.searchQuery);
      });
    }
  }

  deleteUser(item:any) {
    this.userService.deleteOwner(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateItem(item: any) {
    this.userService.updateEmail(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updatePassword(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updateUsername(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

