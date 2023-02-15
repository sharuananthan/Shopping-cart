import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent {

  constructor(private _router:Router,
    ) { }

    navigateToHome(){
      localStorage.removeItem('numberOfItems');
      this._router.navigate(['/'])
    }
}
