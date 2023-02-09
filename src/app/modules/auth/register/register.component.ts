import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(
    // private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,   
   // private toastr:ToastrService
  ) {}

  
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    return null;
  }

}
