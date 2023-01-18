import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html'
})
export class UserRegisterPropertyComponent {

  register : any;
  response : any;
  message : any;

  propertyTypeOptions = [
    {value: '1', label: 'Apartment Building'},
    {value: '2', label: 'Maisonette'},
    {value: '3', label: 'Detached House'}
  ];

  constructor(private loggedUser: LoggedUserService, private fb: FormBuilder, private service: UserService){}

  propertyRegisterForm: FormGroup = this.fb.group({
    propertyId: this.fb.control("",[Validators.required]),
    propertyAddress: this.fb.control("",[Validators.required]),
    yearOfConstruction: this.fb.control("",[Validators.required]),
    propertyType: this.fb.control("",[Validators.required]),
    ownerVatNumber: this.fb.control("",[Validators.required])
  });

  onSubmit() {
    if(this.propertyRegisterForm.valid) {
      this.register = {
        "propertyId": this.propertyRegisterForm.get("propertyId")?.value,
        "propertyAddress": this.propertyRegisterForm.get("propertyAddress")?.value,
        "yearOfConstruction": this.propertyRegisterForm.get("yearOfConstruction")?.value,
        "propertyType": this.propertyRegisterForm.get("propertyType")?.value,
        "ownerVatNumber": this.propertyRegisterForm.get("ownerVatNumber")?.value
      };

      if (this.loggedUser.getUser().vatNumber == this.register.ownerVatNumber){
        this.service.createProperty(this.register).subscribe({
          next: data => {
            this.response = data;
          },
          error: er => this.message = "Error" + er.message,
          complete: () => this.message = "Completed..."
        });
      } else {
        console.log("wrong ownerVatNumber")
      }
    }
  }
}
