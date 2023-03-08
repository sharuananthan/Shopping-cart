import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';
import { CheckoutDialogComponent } from '../checkout-dialog/checkout-dialog.component';

@Component({
  selector: 'app-checkout-main',
  templateUrl: './checkout-main.component.html',
  styleUrls: ['./checkout-main.component.css']
})
export class CheckoutMainComponent {

  subTotal = 0;
  discount = 0;
  delivery = 0;
  totalBill = 0;
  
  constructor(private _router:Router,
              public dialog: MatDialog,
              private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedService.amount$.subscribe(
      (res:number) => {
        this.subTotal = res;
        this.totalBill = this.subTotal + this.delivery - this.discount;
        console.log(res);
      }
    )
    this.getSubTotal();
    this.totalBill = this.subTotal + this.delivery - this.discount;
  }
  openDialog() {
       const dialog = this.dialog.open(CheckoutDialogComponent, {
        // width: '450px',
        //  height: '400px'
                });
              }
    
  getSubTotal(){
    this.subTotal=this.sharedService.getTotalAmount();
    this.totalBill = this.subTotal + this.delivery - this.discount;
  }

  navigateToProduct(){
    this._router.navigate(['/'])
  }

}
