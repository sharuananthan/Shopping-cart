import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private _router: Router,
  ){}
value=10;

  navigateToSearch(){
    this._router.navigate(['/checklist'])
  }

  navigateToDetails(){

  }

}
