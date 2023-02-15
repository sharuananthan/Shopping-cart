import { Component } from '@angular/core';
import { Order } from 'src/app/data/schema/order/order.model';
import { OrderService } from 'src/app/data/service/order/order.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent {
orders:Order[] = [];
  count=0;

  constructor(private sharedService:SharedDataService,
              private orderService:OrderService) { }

  getOrders(){
    this.orderService.getOrders().subscribe(
      (res:Order[]) => {
        this.orders = res;
        console.log(this.orders);
      }
    )

  }

  

  addProduct(){
     this.count++;
     this.sharedService.numberOfItems +=  1;
     localStorage.setItem('numberOfItems', this.sharedService.numberOfItems.toString());

  }

  removeProduct(){
    if(this.count>0){
      this.count--;
      this.sharedService.numberOfItems -=  1;
      localStorage.setItem('numberOfItems', this.sharedService.numberOfItems.toString());
    }

  }

  deleteProduct(){

  }
}
