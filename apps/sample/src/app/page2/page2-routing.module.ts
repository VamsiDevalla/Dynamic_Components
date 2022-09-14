import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2.component';
import { SecondaryComponent } from './secondary/secondary.component';

const routes: Routes = [
  {
    path: '',
    component: Page2Component,
  },
  {
    outlet: 'side-bar',
    path: '',
    component: SecondaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2RoutingModule {}
