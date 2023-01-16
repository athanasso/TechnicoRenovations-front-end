import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-search-owner-page',
  templateUrl: './search-owner-page.component.html'
})
export class SearchOwnerPageComponent implements OnInit{

  searchQuery!: string;
  filteredResponse: any;
  owners: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.owners = this.service.getOwners();
  }

  search() {
    if(this.searchQuery){
      this.filteredResponse = this.owners.data.filter((owner: { email: string; vatNumber: number; }) => {
        return owner.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        || owner.vatNumber == parseInt(this.searchQuery);
      });
    }
  }
}
