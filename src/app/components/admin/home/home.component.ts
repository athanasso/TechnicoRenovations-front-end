import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class AdminHomeComponent {

  response: any;
  message = '';

  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
    this.service.getPropertyRepairs().subscribe({
      next: data => {
        this.response = data;
        console.log(this.response);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }

}
