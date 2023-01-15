import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html'
})
export class PropertyDetailsComponent implements OnInit{

  propertyTypeOptions = [
    {value: '1', label: 'Apartment Building'},
    {value: '2', label: 'Maisonette'},
    {value: '3', label: 'Detached House'}
  ];

  properties : any;
  register : any;
  response : any;
  message : any;

  constructor(private loggedUser: LoggedUserService, private fb: FormBuilder, private service: UserServiceService){}

  propertyRegisterForm: FormGroup = this.fb.group({
    propertyId: this.fb.control(""),
    propertyAddress: this.fb.control(""),
    yearOfConstruction: this.fb.control(""),
    propertyType: this.fb.control(""),
    vatNumber: this.fb.control("")
  });

  ngOnInit(): void {
    this.properties = this.loggedUser.getProperties().data;
    console.log(this.properties);
  }

  onSubmit() {
    this.register = {
      "propertyId": this.propertyRegisterForm.get("propertyId")?.value,
      "propertyAddress": this.propertyRegisterForm.get("propertyAddress")?.value,
      "yearOfConstruction": this.propertyRegisterForm.get("yearOfConstruction")?.value,
      "propertyType": this.propertyRegisterForm.get("propertyType")?.value,
      "vatNumber": this.propertyRegisterForm.get("vatNumber")?.value
    };

    if (this.loggedUser.getUser().vatNumber == this.register.vatNumber){
      this.service.createProperty(this.register).subscribe({
        next: data => {
          this.response = data;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    } else {
      console.log("wrong vatNumber")
    }
  }

  deleteProperty(item:any) {
    this.service.deleteProperty(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
