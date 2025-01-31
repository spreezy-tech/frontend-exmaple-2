import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { TestComponent } from './components/test/test.component';
import { OnboardingModule } from './screens/onboarding/onboarding.module';

const routes: Routes = [
  {
    path: '',
    component: PopupComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./screens/onboarding/onboarding.module').then((module) => module.OnboardingModule)
  },
  {
    path: 'restro',
    loadChildren: () => import('./screens/restro/restro.module').then((module) => module.RestroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
