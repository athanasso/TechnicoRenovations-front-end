import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html'
})
export class UserEditPropertyComponent {


  searchQuery!: string;
  filteredResponse: any;
  properties: any;

  repairTypeOptions = [
    {value: '1', label: 'Painting'},
    {value: '2', label: 'Insulation'},
    {value: '3', label: 'Frames'},
    {value: '4', label: 'Plumbing'},
    {value: '5', label: 'Electrical work'}
  ];

  constructor(private service: LoggedUserService, private userService: UserService) { }

  ngOnInit(): void {
    this.properties = this.service.getProperties();
  }

  search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.properties.data;
    } else {
      this.filteredResponse = this.properties.data.filter((property: { propertyId: string; }) => {
        return property.propertyId.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }

  deleteProperty(item:any) {
    if (confirm("Are you sure you want to delete this property?")) {
      this.userService.deleteProperty(item).subscribe(
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
    this.userService.updatePropertyAddress({ownerVatNumber: item.ownerVatNumber, propertyId: item.propertyId, propertyAddress: item.propertyAddress}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updatePropertyYear({ownerVatNumber: item.ownerVatNumber, propertyId: item.propertyId, yearOfConstruction: item.yearOfConstruction}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
