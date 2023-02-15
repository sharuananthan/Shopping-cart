import { Injectable } from '@angular/core';
import { Order } from './data/schema/order/order.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public  numberOfItems = 0;
  public orderDetails: Order[] = [];
  constructor() { }
}
