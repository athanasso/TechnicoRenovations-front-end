import { Component } from '@angular/core';
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
  currentAddress!: string;
  currentYear!: number;
  currentEmail!: string;

  constructor(private service: LoggedUserService, private userService: UserService) { }

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

    this.currentAddress = this.filteredResponse.property.propertyAddress;
    this.currentYear = this.filteredResponse.property.yearOfConstruction;
    this.currentEmail = this.filteredResponse.propertyOwner.email;
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
    if (this.currentAddress != item.propertyAddress){
      this.userService.updatePropertyAddress({ownerVatNumber: item.propertyOwner.vatNumber, propertyId: item.propertyId, propertyAddress: item.propertyAddress}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (this.currentYear != item.yearOfConstruction){
      this.userService.updatePropertyYear({ownerVatNumber: item.propertyOwner.vatNumber, propertyId: item.propertyId, yearOfConstruction: item.yearOfConstruction}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (this.currentEmail != item.propertyOwner.email){
      this.userService.updateEmail({vatNumber: item.propertyOwner.vatNumber, email: item.propertyOwner.email}).subscribe(
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
