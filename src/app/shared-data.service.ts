import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public numberOfItems = 0;
  constructor() { }
}
