import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

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

  constructor(private router: Router, private service: UserService, private fb: FormBuilder) {}

  repairRegisterForm: FormGroup = this.fb.group({
    ownerVatNumber: this.fb.control("", [Validators.required]),
    propertyId: this.fb.control("", [Validators.required]),
    description: this.fb.control("", [Validators.required]),
    shortDescription: this.fb.control("", [Validators.required]),
    repairType: this.fb.control("", [Validators.required])
  });

  ngOnInit(): void {}

  onSubmit() {
    if(this.repairRegisterForm.valid) {
      this.register = {
        "ownerVatNumber": this.repairRegisterForm.get("ownerVatNumber")?.value,
        "propertyId": this.repairRegisterForm.get("propertyId")?.value,
        "description": this.repairRegisterForm.get("description")?.value,
        "shortDescription": this.repairRegisterForm.get("shortDescription")?.value,
        "repairType": this.repairRegisterForm.get("repairType")?.value
      };

      this.router.navigate(['admin/home']);

      this.service.createRepair(this.register).subscribe({
        next: data => {
          this.response = data;
        },
        error: er => this.message = "Error" + er.message,
        complete: () => this.message = "Completed..."
      });
    }
  }
}
