import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-owners-and-properties',
  templateUrl: './owners-and-properties.component.html'
})
export class AdminOwnersAndPropertiesComponent {

  repairs: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.repairs = this.service.getRepairs();
  }
}
