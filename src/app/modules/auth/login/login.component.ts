import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
   private router: Router,
//    private authService: AuthService,
    // private toastr:ToastrService
  ) { }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    // });
  }

  get f() {
    return this.loginForm.controls;
  }

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     console.log('invalid');
  //     return;
  //   }
  //   this.authService.login(this.loginForm.value).subscribe({
  //     next: (response) => {
  //       this.router.navigate(['/']);
  //       this.toastr.success('Welcome! ' + this.authService.userValue?.userName);
  //     },
  //     error: (error) => {
  //       this.toastr.error(error);
  //     },
  //     complete: () => {
  //       console.log('complete');
  //     }
  //   }
  //   );
  // }
onSubmit(){
  return null;
}

}
