import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private readonly pendingRepairsEndPoint = 'http://localhost:8080/shop/api/admin/get_pending_repairs';
  private readonly proposeCostEndPoint = 'http://localhost:8080/shop/api/admin/propose_cost';
  private readonly proposeDatesEndPoint = 'http://localhost:8080/shop/api/admin/propose_dates';
  private readonly propertyRepairsEndPoint = 'http://localhost:8080/shop/api/admin/get_property_repairs';
  private readonly propertiesEndPoint = 'http://localhost:8080/shop/api/admin/get_properties';
  private readonly ownersEndPoint = 'http://localhost:8080/shop/api/admin/get_owners';
  private readonly deletePropertiesEndPoint = 'http://localhost:8080/shop/api/admin/delete_properties';
  private readonly deleteOwnersEndPoint = 'http://localhost:8080/shop/api/admin/delete_owners';
  private readonly deleteRepairsEndPoint = 'http://localhost:8080/shop/api/admin/delete_repairs';

  constructor(private http: HttpClient) { }
}
