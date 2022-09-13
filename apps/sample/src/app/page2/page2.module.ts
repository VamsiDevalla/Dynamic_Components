import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { SecondaryComponent } from './secondary/secondary.component';

@NgModule({
  declarations: [Page2Component, SecondaryComponent],
  imports: [CommonModule, Page2RoutingModule],
})
export class Page2Module {}
