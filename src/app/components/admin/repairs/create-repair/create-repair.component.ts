import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-create-repair',
  templateUrl: './create-repair.component.html'
})
export class CreateRepairComponent {

  repairTypeOptions = [
    {value: '1', label: 'Painting'},
    {value: '2', label: 'Insulation'},
    {value: '3', label: 'Frames'},
    {value: '4', label: 'Plumbing'},
    {value: '5', label: 'Electrical work'}
  ];

  register : any;
  response: any;
  message = '';

  constructor(private router: Router, private service: UserServiceService, private fb: FormBuilder) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  repairRegisterForm: FormGroup = this.fb.group({
    vatNumber: this.fb.control(""),
    propertyId: this.fb.control(""),
    description: this.fb.control(""),
    shortDescription: this.fb.control(""),
    repairType: this.fb.control("")
  });

  ngOnInit(): void {}

  onSubmit() {
    this.register = {
      "vatNumber": this.repairRegisterForm.get("vatNumber")?.value,
      "propertyId": this.repairRegisterForm.get("propertyId")?.value,
      "description": this.repairRegisterForm.get("description")?.value,
      "shortDescription": this.repairRegisterForm.get("shortDescription")?.value,
      "repairType": this.repairRegisterForm.get("repairType")?.value
    };

    this.service.createRepair(this.register).subscribe({
      next: data => {
        this.response = data;
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
    if(this.response){
      this.router.navigate(['/login']);
    }
  }
}
