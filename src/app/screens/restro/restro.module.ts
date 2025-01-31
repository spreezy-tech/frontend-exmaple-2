import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestroRoutingModule } from './restro-routing.module';
import { RestroCardComponent } from './components/restro-card/restro-card.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from 'src/app/components/test/test.component';


@NgModule({
  declarations: [
    RestroCardComponent,
  ],
  imports: [
    CommonModule,
    RestroRoutingModule,
    SharedModule
  ]
})
export class RestroModule { }
