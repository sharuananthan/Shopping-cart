import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';


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
    private authService: AuthService,
    
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(
      () => {
        console.log("User is logged in");
        this.router.navigate(['/']);
      }
    );
  }

}
