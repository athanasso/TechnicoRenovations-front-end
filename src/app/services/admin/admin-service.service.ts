import { LoggedUserService } from 'src/app/services/logged-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly pendingRepairsEndPoint = 'http://localhost:8080/shop/api/admin/get_pending_repairs';
  private readonly proposeCostEndPoint = 'http://localhost:8080/shop/api/admin/propose_cost';
  private readonly proposeDatesEndPoint = 'http://localhost:8080/shop/api/admin/propose_dates';
  private readonly propertyRepairsEndPoint = 'http://localhost:8080/shop/api/admin/get_property_repairs';
  private readonly propertiesEndPoint = 'http://localhost:8080/shop/api/admin/get_properties';
  private readonly ownersEndPoint = 'http://localhost:8080/shop/api/admin/get_owners';

  user: any;

  constructor(private http: HttpClient, private service: LoggedUserService) {this.user = this.service.getUser(); }

  proposeCost(data: any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.post(this.proposeCostEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  proposeDates(data: any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    console.log(JSON.stringify(data));

    return this.http.post(this.proposeDatesEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getPendingRepairs(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.pendingRepairsEndPoint, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getPropertyRepairs(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.propertyRepairsEndPoint, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getProperties (){
    this.user = this.service.getUser();
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.propertiesEndPoint, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }

  getOwners(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));

    return this.http.get(this.ownersEndPoint, { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }
}
