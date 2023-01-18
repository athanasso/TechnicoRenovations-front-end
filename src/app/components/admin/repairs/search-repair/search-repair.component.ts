import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-search-repair',
  templateUrl: './search-repair.component.html'
})
export class AdminSearchRepairComponent {

  searchQuery!: string;
  filteredResponse: any;
  repairs: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.repairs = this.service.getRepairs();
  }

  search() {
    if(this.searchQuery){
      this.filteredResponse = this.repairs.data.filter((repair: { status: string; repairId: number; }) => {
        return repair.status.toLowerCase().includes(this.searchQuery.toLowerCase())
        || repair.repairId == parseInt(this.searchQuery);
      });
    }
  }
}
