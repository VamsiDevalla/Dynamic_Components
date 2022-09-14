import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1.component';
import { SecondaryComponent } from './secondary/secondary.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
  },
  {
    outlet: 'top-bar',
    path: '',
    component: SecondaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
