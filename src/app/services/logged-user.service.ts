import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  data: any;

  constructor() { }

  setData(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    this.data = data;
  }

  getData() {
    const data = localStorage.getItem('user');
    if (data) {
        this.data = JSON.parse(data);
        return this.data;
    } else {
        return null;
    }
  }

  clearData() {
    localStorage.removeItem('user');
    this.data = null;
  }
}
