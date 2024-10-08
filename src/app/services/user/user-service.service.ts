import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoggedUserService } from '../logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private readonly createPropertyEndPoint = 'http://localhost:8080/shop/api/user/property/create_property';
  private readonly correctPropertyAddressEndPoint = 'http://localhost:8080/shop/api/user/property/correct_property_address';
  private readonly correctPropertyYearEndPoint = 'http://localhost:8080/shop/api/user/property/correct_property_year';
  private readonly createRepairEndPoint = 'http://localhost:8080/shop/api/user/repair/create_property_repair';
  private readonly propertiesEndPoint = 'http://localhost:8080/shop/api/user/get_properties/';
  private readonly changeRepairStatusEndPoint = 'http://localhost:8080/shop/api/user/repair/repair_status';
  private readonly changeDescriptionEndpoint = 'http://localhost:8080/shop/api/user/repair/description';
  private readonly repairStatusEndPoint = 'http://localhost:8080/shop/api/user/get_repair_status/';
  private readonly correctOwnerUsernameEndPoint = 'http://localhost:8080/shop/api/user/owner/correct_owner_username';
  private readonly correctOwnerEmailEndPoint = 'http://localhost:8080/shop/api/user/owner/correct_owner_email';
  private readonly correctOwnerPasswordEndPoint = 'http://localhost:8080/shop/api/user/owner/correct_owner_password';
  private readonly deletePropertyEndPoint = 'http://localhost:8080/shop/api/user/property/delete_property';
  private readonly deleteRepairEndPoint = 'http://localhost:8080/shop/api/user/repair/delete_property_repair';
  private readonly deleteOwnerEndPoint = 'http://localhost:8080/shop/api/user/owner/delete_owner';
  private readonly userInfoEndPoint = 'http://localhost:8080/shop/api/user/get_user/';

  user: any;

  constructor(private http: HttpClient, private service: LoggedUserService) {this.user = this.service.getUser(); }

  getProperties(data: string){
    this.user = this.service.getUser();
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.propertiesEndPoint+data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getUser(){
    this.user = this.service.getUser();
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.userInfoEndPoint+this.user.vatNumber, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getRepairs(data: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.repairStatusEndPoint+data, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  updateUsername(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.correctOwnerUsernameEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updateEmail(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.correctOwnerEmailEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updatePassword(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.correctOwnerPasswordEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updateRepairStatus(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.changeRepairStatusEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updateDescription(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.changeDescriptionEndpoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updatePropertyAddress(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.correctPropertyAddressEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  updatePropertyYear(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.correctPropertyYearEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }

  deleteOwner(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.deleteOwnerEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  deleteProperty(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.deletePropertyEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  deleteRepair(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.deleteRepairEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  createRepair(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.createRepairEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  createProperty(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.createPropertyEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        catchError(error => throwError(() => error))
      );
  }
}
