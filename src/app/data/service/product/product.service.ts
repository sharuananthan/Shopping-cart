import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Product } from '../../schema/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl = environment.baseApiUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
    
  }


}
