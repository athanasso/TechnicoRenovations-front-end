import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { AdminService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-create-property-page',
  templateUrl: './create-property-page.component.html'
})
export class AdminCreatePropertyComponent implements OnInit{

  propertyTypeOptions = [
    {value: '1', label: 'Apartment Building'},
    {value: '2', label: 'Maisonette'},
    {value: '3', label: 'Detached House'}
  ];

  properties : any;
  register : any;
  response : any;
  message : any;

  constructor(private loggedUser: LoggedUserService, private fb: FormBuilder, private service: UserService, private router: Router, private adminService: AdminService){}

  propertyRegisterForm: FormGroup = this.fb.group({
    propertyId: this.fb.control("",[Validators.required]),
    propertyAddress: this.fb.control("",[Validators.required]),
    yearOfConstruction: this.fb.control("",[Validators.required]),
    propertyType: this.fb.control("",[Validators.required]),
    ownerVatNumber: this.fb.control("",[Validators.required])
  });

  ngOnInit(): void {
    this.properties = this.loggedUser.getProperties().data;
  }

  onSubmit() {
    if(this.propertyRegisterForm.valid) {
      this.register = {
        "propertyId": this.propertyRegisterForm.get("propertyId")?.value,
        "propertyAddress": this.propertyRegisterForm.get("propertyAddress")?.value,
        "yearOfConstruction": this.propertyRegisterForm.get("yearOfConstruction")?.value,
        "propertyType": this.propertyRegisterForm.get("propertyType")?.value,
        "ownerVatNumber": this.propertyRegisterForm.get("ownerVatNumber")?.value
      };

      this.service.createProperty(this.register).subscribe({
        next: data => {
          this.response = data;
        },
        error: er =>{
          if (er.status === 404 && er.error === "Duplicate entry") {
            alert("The Property already exists or user vat is wrong");
          }
        },
        complete: () => {
          this.message = "Completed...";
          this.adminService.getPropertyRepairs().subscribe({
            next: data => {
              this.loggedUser.setRepairs(data);
            },
            error: er => this.message = "Error" + er.message,
            complete: () => {
              this.message = "Completed...";
              this.router.navigate(['admin/home']);
            }
          });
          this.router.navigate(["/admin/owners_properties"]);
        }
      });
    }
  }
}
