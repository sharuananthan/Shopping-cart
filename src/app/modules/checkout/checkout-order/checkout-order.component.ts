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


  ngOnInit(): void {
    this.sharedService.order$.subscribe(
      (res:Order[]) => {
        this.orders = res;
        console.log(res);
      }
    )
    this.getOrders();
  }

  
getOrders(){
  
  this.orders = localStorage.getItem('orderDetails') ? JSON.parse(localStorage.getItem('orderDetails') || '{}') : [];
  console.log(this.orders);
}
  

  addProductInCart(order:any){
     this.sharedService.numberOfItems +=  1;
     localStorage.setItem('numberOfItems', this.sharedService.numberOfItems.toString());
     this.sharedService.addProduct(order);
  }

  removeProductInCart(){
    if(this.count>0){
      this.count--;
      this.sharedService.numberOfItems -=  1;
      localStorage.setItem('numberOfItems', this.sharedService.numberOfItems.toString());
    }

  }

  deleteProduct(){

  }
}
