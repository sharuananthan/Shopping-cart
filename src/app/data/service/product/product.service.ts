import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Product } from '../../schema/product/product.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl = environment.baseApiUrl + '/products';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProducts():Observable<Product[]> {
    const headers = new HttpHeaders({   
      'Authorization': 'Bearer '+ this.authService.getAccessToken()
    });
    console.log(this.authService.getAccessToken());
    return this.http.get<Product[]>(this.baseUrl, {headers});
    
  }

  getProductsBySearchKey(searchKey: string):Observable<Product[]> {
    
    return this.http.get<Product[]>(this.baseUrl +`/search?q=${searchKey}`);
  }



}
