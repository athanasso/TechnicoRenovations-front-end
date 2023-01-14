import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-search-repair',
  templateUrl: './search-repair.component.html'
})
export class SearchRepairComponent {

  searchQuery!: string;
  response: any;
  filteredResponse: any;
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

  search() {
    this.filteredResponse = this.response.data.filter((repair: { repairId: any; propertyOwner: { vatNumber: number; }; }) => {
      return repair.repairId
      || repair.propertyOwner.vatNumber == parseInt(this.searchQuery);
    });
}
}
