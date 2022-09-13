import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [NxWelcomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
