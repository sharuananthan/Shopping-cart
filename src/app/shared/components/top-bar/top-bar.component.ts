import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/data/schema/product/product.model';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { OrderService } from 'src/app/data/service/order/order.service';
import { ProductService } from 'src/app/data/service/product/product.service';
import { SharedDataService } from 'src/app/shared-data.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

username : string = "Guest";
searchKey: string = '';
products: Product[] = [];

  constructor(
    private _router: Router,
    private sharedService:SharedDataService,
    private orderService:OrderService,
    private authService: AuthService,
    private productService: ProductService
  ){}

//numberOfItems : number = 0;


  ngOnInit(): void {
    this.getProfile();
  }

  getProductsBySearchKey(){
    this.productService.getProductsBySearchKey(this.searchKey).subscribe(
      (products) => {
        this.products = products;
        console.log(this.products);
        this._router.navigate(['/'], {queryParams: {products:JSON.stringify(products)}});
      }
    )
  }


  navigateToChecklist(){

    this._router.navigate(['/checklist'])
  }

  navigateToSearch(){

  }

  navigateToDetails(productId: string){
    this._router.navigate(['/details', productId]);
  

  }

  public getaddToCart(){
    
    return localStorage.getItem('numberOfItems');
  }

  getProfile(){
    this.authService.getProfile().subscribe(
      (res) => {
        if(res.username == null){
          this.username = "Guest";
        }
        this.username = res.username;
        console.log(this.username);
      }
    )
  }


}
