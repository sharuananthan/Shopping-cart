import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  totalPrice = this.subTotal + this.delivery - this.discount;
  
  constructor(private _router:Router,
              public dialog: MatDialog) { }

  
  openDialog() {
       const dialog = this.dialog.open(CheckoutDialogComponent, {
        // width: '450px',
        //  height: '400px'
                });
              }

  navigateToProduct(){
    this._router.navigate(['/'])
  }

}
