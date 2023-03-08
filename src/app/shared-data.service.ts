import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './data/schema/order/order.model';
import { Product } from './data/schema/product/product.model';
import { ProductService } from './data/service/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public  numberOfItems = 0;
  private orderDetails: Order[] = [];
  private cart: any[] = [];
  private totalAmount: number = 0;
  private cartSubject = new BehaviorSubject<any[]>([]);
  private orderDetailsSubject = new BehaviorSubject<Order[]>([]);
  order$= this.orderDetailsSubject.asObservable();
  private totalAmountSubject = new BehaviorSubject<number>(0);
  amount$= this.totalAmountSubject.asObservable();
  private groupedProducts: any[] = [];
  private searchKey = new BehaviorSubject("");
  currentSearchKey = this.searchKey.asObservable();

  constructor(private productService: ProductService) { }

  setSearchKey(searchKey: string){
    this.searchKey.next(searchKey);
  }

  public addProduct(product: any): void {
    this.cart.push(product);
    this.totalAmount += product.price;
    this.groupedProducts = this.cart.reduce((acc, curr) => {
      const index = acc.findIndex((item:Product) => item.productName === curr.productName);
      if (index !== -1) {
        acc[index].count++;
        acc[index].totalPrice += curr.price;
      } else {
        acc.push({ productName: curr.productName, price: curr.price, count: 1, totalPrice: curr.price });
      }
      console.log(acc);
      return acc;
      
    }, []);
    this.orderDetails = this.groupedProducts;
    this.orderDetailsSubject.next(this.orderDetails);
    localStorage.setItem('orderDetails', JSON.stringify(this.orderDetails));
    console.log(this.orderDetails);
    this.cartSubject.next(this.cart);
    this.totalAmountSubject.next(this.totalAmount);
    
  }

  public removeProduct(product: any): void {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.totalAmount -= product.price;
      this.cartSubject.next(this.cart);
      this.orderDetailsSubject.next(this.orderDetails);
      this.totalAmountSubject.next(this.totalAmount);
    }
  }

  public getCart(): any[] {
    return this.cart;
  }

  public getOrderDetails(): Order[] {
    return this.orderDetails;
  }

  public getTotalAmount(): number {
    return this.totalAmount;
  }

  public getCartObservable(): BehaviorSubject<any[]> {
    return this.cartSubject;
  }

  public getTotalAmountObservable(): BehaviorSubject<number> {
    return this.totalAmountSubject;
  }
}
