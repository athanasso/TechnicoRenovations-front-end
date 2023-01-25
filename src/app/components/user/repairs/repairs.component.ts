import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html'
})
export class UserRepairsComponent implements OnInit{

  user: any;
  searchQuery!: string;
  filteredResponse: any;
  repairs: any;
  register : any;
  response: any;
  message = '';

  constructor(private service: LoggedUserService, private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.service.getUser();
    this.repairs = this.service.getRepairs();
  }

  repairTypeOptions = [
    {value: '1', label: 'Painting'},
    {value: '2', label: 'Insulation'},
    {value: '3', label: 'Frames'},
    {value: '4', label: 'Plumbing'},
    {value: '5', label: 'Electrical work'}
  ];

  repairRegisterForm: FormGroup = this.fb.group({
    ownerVatNumber: this.fb.control(""),
    propertyId: this.fb.control(""),
    description: this.fb.control(""),
    shortDescription: this.fb.control(""),
    repairType: this.fb.control("")
  });

  onSubmit() {
    this.register = {
      "ownerVatNumber": this.repairRegisterForm.get("ownerVatNumber")?.value,
      "propertyId": this.repairRegisterForm.get("propertyId")?.value,
      "description": this.repairRegisterForm.get("description")?.value,
      "shortDescription": this.repairRegisterForm.get("shortDescription")?.value,
      "repairType": this.repairRegisterForm.get("repairType")?.value
    };

    this.userService.createRepair(this.register).subscribe({
      next: data => {
        this.response = data;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });

    this.userService.getRepairs(this.user.vatNumber).subscribe({
      next: data => {
        this.service.setRepairs(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        this.message = "Completed...";
        this.router.navigate(['user/home']);
      }
    });
  }
}
