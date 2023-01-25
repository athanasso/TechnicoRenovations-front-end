import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-edit-repair',
  templateUrl: './edit-repair.component.html'
})
export class EditRepairPageComponent {

  searchQuery!: string;
  filteredResponse: any;
  repairs: any;
  currentDescription: any;
  currentCost: any;
  message = '';
  @ViewChild('proposedStartDate') proposedStartDate!: ElementRef;
  @ViewChild('proposedEndDate') proposedEndDate!: ElementRef;


  constructor(private service: LoggedUserService, private userService: UserService, private adminService: AdminService, private loggedUser: LoggedUserService) { }

  formatDate(date: string): string {
    const dateArray = date.split('-');
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
  }

  ngOnInit(): void {
    this.repairs = this.service.getRepairs();
  }

  search() {
    if (!this.searchQuery) {
      this.filteredResponse = this.repairs.data;
    } else {
      this.filteredResponse = this.repairs.data.filter((repair: { status: string; repairId: number; }) => {
        return repair.status.toLowerCase().includes(this.searchQuery.toLowerCase())
        || repair.repairId == parseInt(this.searchQuery);
      });
    }
    this.currentDescription = this.filteredResponse.repair.description;
    this.currentCost = this.filteredResponse.repair.proposedCost;
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
    if (this.currentDescription != item.desciption){
      this.userService.updateDescription({ownerVatNumber: item.propertyOwner.vatNumber, repairId: item.repairId, description: item.desciption}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
    if (this.currentCost != item.proposedCost){
      this.adminService.proposeCost({repairId: item.repairId, proposedCost: item.proposedCost}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }

    if (this.proposedStartDate.nativeElement.dirty && this.proposedEndDate.nativeElement.dirty){
      this.adminService.proposeDates({repairId: item.repairId, proposedStartDate: this.formatDate(item.proposedStartDate), proposedEndDate: this.formatDate(item.proposedEndDate)}).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }

    this.adminService.getPropertyRepairs().subscribe({
      next: data => {
        this.loggedUser.setRepairs(data);
      },
      error: er => this.message = "Error" + er.message,
      complete: () => {
        this.message = "Completed...";
      }
    });
   }
}
