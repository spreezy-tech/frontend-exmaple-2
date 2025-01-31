import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';


@NgModule({
  declarations: [
    SearchComponent,
    FooterComponent,
    PopupComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OnboardingModule { }
