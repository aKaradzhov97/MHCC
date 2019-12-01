// Decorators
import { NgModule } from '@angular/core';

// Material Modules
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


// Constants
const MaterialComponents = [
  MatListModule,
  MatCardModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
