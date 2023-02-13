import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl = environment.baseApiUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseUrl);
    console.log(this.baseUrl);
  }


}
