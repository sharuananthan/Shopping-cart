import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginResponse } from '../../schema/auth/loginResponse';
import { ProfileResponse } from '../../schema/auth/profileResponse';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  private accessToken! : string;
//  private userSubject: BehaviorSubject<LoginResponse|null>;
//  public user!: Observable<LoginResponse | null>;
 readonly baseUrl = environment.baseApiUrl + '/auth';

 
  constructor(private http: HttpClient, private router: Router) {}

  login(loginForm: any){
    return this.http.post<LoginResponse>(this.baseUrl + '/login', loginForm).pipe(
      tap((res: any) => {
        this.accessToken = res.access_token;
        console.log(res.access_token);
        localStorage.setItem('accessToken', this.accessToken);
        console.log(this.accessToken);
        
      }),
     catchError(this.handleError)
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getProfile(): Observable<ProfileResponse> {
    const headers = new HttpHeaders({   
      'Authorization': 'Bearer '+ this.getAccessToken()
    });
    return this.http.get<ProfileResponse>(this.baseUrl + '/profile', {headers});
  }

  register(RegisterResponse: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/register',RegisterResponse )
      
  }

  logout() {
    localStorage.removeItem('accessToken');
   
    this.router.navigate(['/login']);
  }

  // public get userValue() {
  //   return localStorage.getItem('user');
  // }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error);
    } else {
      console.error('An error occurred:', error);
    }
    return throwError(() => new Error(error.toString()));
  }
}
