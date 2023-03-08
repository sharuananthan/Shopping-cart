import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,   
   
  ) {}

  ngOnInit(){
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  
  get f() {
    return this.registerForm.controls;
    
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('invalid');
      return;
    }
    
    this.authService.register(this.registerForm.value).subscribe(
      (res) => {
        console.log(res);
        console.log("User is registered");
        this.router.navigate(['/login']);
      }
    );
  }

}
