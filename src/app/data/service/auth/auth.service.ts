import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginResponse } from '../../schema/auth/loginResponse';
import { ApiResponse } from '../../schema/common/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private userSubject: BehaviorSubject<LoginResponse|null>;
 public user!: Observable<LoginResponse | null>;
 readonly baseUrl = environment.baseApiUrl + '/api/auth';

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  login(loginForm: any): Observable<ApiResponse<LoginResponse>> {
    return this.http
      .post<ApiResponse<LoginResponse>>(this.baseUrl + '/login', loginForm)
      .pipe(
        map((user) => {
          if (user.status === 'SUCCEEDED') {
            localStorage.setItem('user', JSON.stringify(user?.data));
            this.userSubject.next(user?.data);
          }
          return user;
        }),
        catchError(this.handleError)
      );
  }










  public get userValue() {
    return this.userSubject?.value || null;
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
