// Decorators
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingComponent } from './landing/landing.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
