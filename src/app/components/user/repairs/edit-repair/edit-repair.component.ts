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
    if (confirm("Are you sure you want to delete this repair?")) {
      this.userService.deleteRepair(item).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  updateItem(item: any) {
    this.userService.updateRepairStatus({ownerVatNumber: item.ownerVatNumber, repairId: item.repairId, accepted: item.accepted}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.userService.updateDescription({ownerVatNumber: item.ownerVatNumber, repairId: item.repairId, description: item.description}).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
