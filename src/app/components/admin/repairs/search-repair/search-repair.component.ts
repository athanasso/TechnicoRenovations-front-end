import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-search-repair',
  templateUrl: './search-repair.component.html'
})
export class SearchRepairComponent {

  searchQuery!: string;
  filteredResponse: any;
  repairs: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.repairs = this.service.getRepairs();
  }

  search() {
    this.filteredResponse = this.repairs.data.filter((repair: { repairId: any; propertyOwner: { vatNumber: number; }; }) => {
      return repair.repairId
      || repair.propertyOwner.vatNumber == parseInt(this.searchQuery);
    });
  }
}
