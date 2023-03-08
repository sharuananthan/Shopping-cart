import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
   CommonModule,
   MatAutocompleteModule ,
   MatBadgeModule,
   MatIconModule,
   FormsModule
  
  ],

   exports:[TopBarComponent],
})


export class SharedModule { 
  
}
