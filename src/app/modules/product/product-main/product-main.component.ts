import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/data/service/product/product.service';
import {Product} from 'src/app/data/schema/product/product.model';
import { SharedDataService } from 'src/app/shared-data.service';
import { Order } from 'src/app/data/schema/order/order.model';
import { OrderService } from 'src/app/data/service/order/order.service';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent {
products : Product[] = [];
// orders: Order[]= [];
// orderDetails: Order[] = [];

  constructor(private productService:ProductService,
              private _router: Router,
              private sharedService:SharedDataService,
              private orderService:OrderService) {}


    ngOnInit(): void {
      this.getProducts();
      //this.createOrder();
    }


    getProducts(){
      this.productService.getProducts().subscribe(
        (res: Product[]) => {
          this.products= res ;
          console.log(this.products);
        }
      )

    }

    public addToCart(productId:number){
      this.sharedService.numberOfItems +=  1;
      localStorage.setItem('numberOfItems', this.sharedService.numberOfItems.toString());
      //get the product id
      this.sharedService.orderDetails.push({productId:productId});
      localStorage.setItem('orderDetails', JSON.stringify(this.sharedService.orderDetails));
      console.log(this.sharedService.orderDetails);

    }
  

    // createOrder(){
    //   this.orderDetails= new Array<Order>();
    //   for(let i=0; i<this.orders.length; i++){
    //     this.orderDetails.push(this.orders[i]);
    //     console.log(this.orderDetails);

    //   }

    //   this.orderService.createOrder(this.orderDetails).subscribe(
    //     (res) => {
    //       console.log(res);
    //       console.log("Order is created");
    //     }
    //   );
      
    // }


}
