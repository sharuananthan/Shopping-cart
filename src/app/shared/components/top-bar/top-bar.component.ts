import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/data/service/order/order.service';
import { SharedDataService } from 'src/app/shared-data.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private _router: Router,
    private sharedService:SharedDataService,
    private orderService:OrderService
  ){}

//numberOfItems : number = 0;

  navigateToSearch(){
    this.orderService.createOrder(this.sharedService.orderDetails).subscribe(
      (res) => {
        console.log(res);
      }
    )

    this._router.navigate(['/checklist'])
  }

  navigateToDetails(){

  }

  public getaddToCart(){
    
    return localStorage.getItem('numberOfItems');
  }


}
