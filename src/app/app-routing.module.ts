import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMainComponent } from './modules/product/product-main/product-main.component';

const routes: Routes = [

  {
    path: '',
    component: ProductMainComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
