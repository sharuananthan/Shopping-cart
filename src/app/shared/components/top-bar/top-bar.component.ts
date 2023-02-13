import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(
    private _router: Router,
    private sharedService:SharedDataService
  ){}

numberOfItems : number = 0;

  navigateToSearch(){
    this._router.navigate(['/checklist'])
  }

  navigateToDetails(){

  }

  public getaddToCart(){
    return this.sharedService.numberOfItems;
  }


}
