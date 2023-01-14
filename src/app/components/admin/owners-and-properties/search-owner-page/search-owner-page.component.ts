import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-search-owner-page',
  templateUrl: './search-owner-page.component.html'
})
export class SearchOwnerPageComponent implements OnInit{
  searchQuery!: string;
  response: any;
  filteredResponse: any;
  message = '';


  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
    this.service.getOwners().subscribe({
      next: data => {
        this.response = data;
        console.log(this.response);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => this.message = "Completed..."
    });
  }

  search() {
    if(this.searchQuery){
      this.filteredResponse = this.response.data.filter((owner: { email: string; vatNumber: number; }) => {
        return owner.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        || owner.vatNumber == parseInt(this.searchQuery);
      });
    }
  }
}
