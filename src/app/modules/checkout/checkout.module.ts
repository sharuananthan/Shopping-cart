import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutMainComponent } from './checkout-main/checkout-main.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';



@NgModule({
  declarations: [
    CheckoutMainComponent,
    CheckoutOrderComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[CheckoutOrderComponent]
})
export class CheckoutModule { }
