import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html'
})
export class UserPropertyDetailsComponent implements OnInit{

  properties : any;
  register : any;
  response : any;
  message : any;

  constructor(private loggedUser: LoggedUserService, private service: UserService){}

  ngOnInit(): void {
    this.properties = this.loggedUser.getProperties().data;
  }

  deleteProperty(item: any[]) {
    let obj = {
      propertyId: item[0],
      ownerVatNumber: item[1]
    }
    if (confirm("Are you sure you want to delete this property?")) {
      this.service.deleteProperty(obj).subscribe(
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
