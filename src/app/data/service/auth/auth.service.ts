import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginResponse } from '../../schema/auth/loginResponse';
import { ApiResponse } from '../../schema/common/apiResponse';
import { RegisterResponse } from '../../schema/auth/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//  private userSubject: BehaviorSubject<LoginResponse|null>;
//  public user!: Observable<LoginResponse | null>;
 readonly baseUrl = environment.baseApiUrl + '/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: any){
    return this.http.post<LoginResponse>(this.baseUrl + '/login', loginForm)
      
      
  }

  register(RegisterResponse: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/register',RegisterResponse )
      
  }

  logout() {
    localStorage.removeItem('user');
   
    this.router.navigate(['/login']);
  }

  public get userValue() {
    return localStorage.getItem('user');
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error);
    } else {
      console.error('An error occurred:', error);
    }
    return throwError(() => new Error(error.toString()));
  }
}
