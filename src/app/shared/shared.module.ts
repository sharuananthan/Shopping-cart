import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
   CommonModule,
   MatAutocompleteModule ,
   MatBadgeModule,
   MatIconModule
  
  ],

   exports:[TopBarComponent],
})


export class SharedModule { 
  
}
