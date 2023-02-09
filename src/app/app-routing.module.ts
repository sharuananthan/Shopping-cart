import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CheckoutMainComponent } from './modules/checkout/checkout-main/checkout-main.component';
import { ProductMainComponent } from './modules/product/product-main/product-main.component';

const routes: Routes = [

  {
    path: '',
    component: ProductMainComponent
  },
  {
    path:'checklist',
    component: CheckoutMainComponent
  },
  
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
