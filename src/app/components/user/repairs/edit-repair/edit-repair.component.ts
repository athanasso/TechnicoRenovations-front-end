import { Component } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-edit-repair',
  templateUrl: './edit-repair.component.html'
})
export class EditRepairComponent {

  searchQuery!: string;
  filteredResponse: any;
  repairs: any;

  repairTypeOptions = [
    {value: '1', label: 'Painting'},
    {value: '2', label: 'Insulation'},
    {value: '3', label: 'Frames'},
    {value: '4', label: 'Plumbing'},
    {value: '5', label: 'Electrical work'}
  ];

  constructor(private service: LoggedUserService, private userService: UserService) { }

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

  deleteRepair(item:any) {
    this.userService.deleteRepair(item).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateItem(item: any) {

  }
}
