import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private readonly loginEndPoint = 'http://localhost:8080/shop/api/auth/login';
  private readonly RegisterEndPoint = 'http://localhost:8080/shop/api/auth/register';

  constructor(private http: HttpClient) { }

  getUser(data:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    return this.http.post(this.loginEndPoint, JSON.stringify(data), { headers: headers })
      .pipe(
        retry(1),
        catchError(error => throwError(() => 'Something is wrong...'))
      );
  }
}
