import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-edit-property-page',
  templateUrl: './edit-property-page.component.html'
})
export class AdminEditPropertyComponent {

  searchQuery!: string;
  filteredResponse: any;
  properties: any;
  message = '';

  constructor(private service: LoggedUserService, private userService: UserService, private adminService: AdminService, private loggedUser: LoggedUserService) { }

  ngOnInit(): void {
    this.properties = this.service.getProperties();
  }

  search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.properties.data;
    } else {
      this.filteredResponse = this.properties.data.filter((property: { propertyId: string; yearOfConstruction: number; }) => {
        return property.propertyId.toLowerCase().includes(this.searchQuery.toLowerCase())
        || property.yearOfConstruction == parseInt(this.searchQuery);
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
    if (item.propertyAddress){
      this.userService.updatePropertyAddress({ownerVatNumber: item.propertyOwner.vatNumber, propertyId: item.propertyId, propertyAddress: item.propertyAddress}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (item.yearOfConstruction){
      this.userService.updatePropertyYear({ownerVatNumber: item.propertyOwner.vatNumber, propertyId: item.propertyId, yearOfConstruction: item.yearOfConstruction}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (item.propertyOwner.email){
      this.userService.updateEmail({vatNumber: item.propertyOwner.vatNumber, email: item.propertyOwner.email}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }

    this.adminService.getPropertyRepairs().subscribe({
      next: data => {
        this.loggedUser.setRepairs(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        this.message = "Completed...";
      }
    });
  }
}
