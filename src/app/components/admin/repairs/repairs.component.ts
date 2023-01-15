import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html'
})
export class AdminRepairsComponent implements OnInit{

  repairs: any;

  constructor(private service: LoggedUserService) { }

  ngOnInit(): void {
    this.repairs = this.service.getRepairs();
  }
}
