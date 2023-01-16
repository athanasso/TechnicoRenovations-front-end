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
    this.filteredResponse = this.repairs.data.filter((repair: { repairId: any; }) => {
      return repair.repairId
    });
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
  //   // check if the email has changed
  //   if (this.emailControl.value !== item.email) {
  //     this.userService.updateEmail({email: this.emailControl.value}).subscribe(
  //       (res: any) => {
  //         console.log(res);
  //       },
  //       (err: any) => {
  //         console.log(err);
  //       }
  //     );
  //   }
  //   // check if the password has changed
  //   if (this.passwordControl.value !== item.password) {
  //     this.userService.updatePassword({password: this.passwordControl.value}).subscribe(
  //       (res: any) => {
  //         console.log(res);
  //       },
  //       (err: any) => {
  //         console.log(err);
  //       }
  //     );
  //   }
  //   // check if the username has changed
  //   if (this.usernameControl.value !== item.username) {
  //     this.userService.updateUsername({username: this.usernameControl.value}).subscribe(
  //       (res: any) => {
  //         console.log(res);
  //       },
  //       (err: any) => {
  //         console.log(err);
  //       }
  //     );
  //   }
  }
}
