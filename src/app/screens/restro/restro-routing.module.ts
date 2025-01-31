import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestroCardComponent } from './components/restro-card/restro-card.component';

const routes: Routes = [
  {
    path: 'card',
    component: RestroCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestroRoutingModule { }
