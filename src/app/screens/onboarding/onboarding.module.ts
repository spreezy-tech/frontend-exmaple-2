import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    FooterComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class OnboardingModule { }
