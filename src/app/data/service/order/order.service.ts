import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Order } from '../../schema/order/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly baseUrl = environment.baseApiUrl + '/orders';

  constructor(private http: HttpClient) {}

  createOrder(order:any): Observable<any> {
    return this.http.post<any>(this.baseUrl, order);
    
  }
}
