import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutMainComponent } from './checkout-main/checkout-main.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CheckoutDialogComponent } from './checkout-dialog/checkout-dialog.component';


@NgModule({
  declarations: [
    CheckoutMainComponent,
    CheckoutOrderComponent,
    CheckoutDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],

  exports:[CheckoutOrderComponent]
})
export class CheckoutModule { }
