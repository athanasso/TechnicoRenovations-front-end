import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

@Component({
  selector: 'app-search-property-page',
  templateUrl: './search-property-page.component.html'
})
export class AdminSearchPropertyComponent {

  searchQuery!: string;
  filteredResponse: any;
  properties: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.properties = this.service.getProperties();
  }

  search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.properties.data;
    } else {
      this.filteredResponse = this.properties.data.filter((property: { propertyId: string; yearOfConstruction: number; }) => {
        return property.propertyId.toLowerCase().includes(this.searchQuery.toLowerCase())
        || property.yearOfConstruction == parseInt(this.searchQuery);
      });
    }
  }
}
