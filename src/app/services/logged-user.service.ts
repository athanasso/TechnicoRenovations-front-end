import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  owners: any;
  user: any;
  properties: any;
  repairs: any;

  constructor() { }

  setUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    this.user = data;
  }

  getUser() {
    const data = localStorage.getItem('user');
    if (data) {
        this.user = JSON.parse(data);
        return this.user;
    } else {
        return null;
    }
  }

  setProperties(data: any) {
    localStorage.setItem('properties', JSON.stringify(data));
    this.properties = data;
  }

  getProperties() {
    const data = localStorage.getItem('properties');
    if (data) {
        this.properties = JSON.parse(data);
        return this.properties;
    } else {
        return null;
    }
  }

  setRepairs(data: any) {
    localStorage.setItem('repairs', JSON.stringify(data));
    this.repairs = data;
  }

  getRepairs() {
    const data = localStorage.getItem('repairs');
    if (data) {
        this.repairs = JSON.parse(data);
        return this.repairs;
    } else {
        return null;
    }
  }

  setOwners(data: any) {
    localStorage.setItem('owners', JSON.stringify(data));
    this.owners = data;
  }

  getOwners() {
    const data = localStorage.getItem('owners');
    if (data) {
        this.user = JSON.parse(data);
        return this.user;
    } else {
        return null;
    }
  }

  clearData() {
    localStorage.removeItem('user');
    localStorage.removeItem('properties');
    localStorage.removeItem('repairs');
    localStorage.removeItem('owners');
    this.user = null;
    this.properties = null;
    this.repairs = null;
  }
}
