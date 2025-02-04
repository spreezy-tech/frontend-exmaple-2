import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentObservableNumber : number = 0;
  currentRandomNumberSubject : number = 0;
  currentRandomNumberSubject2 : number = 0;
  currentRandomNumberSubject3 : number = 0;

  constructor(private router : Router, private onboardingService : OnboardingService){
    this.onboardingService.randomNumberSender?.subscribe((value) => {
      this.currentObservableNumber = value;
    })

    this.onboardingService.randomNumberSubject$.subscribe((value) => {
      this.currentRandomNumberSubject = value;
    })

    this.onboardingService.randomNumberSubject$.subscribe((value) => {
      this.currentRandomNumberSubject2 = value;
    })

    this.onboardingService.randomNumberSubject$.subscribe((value) => {
      this.currentRandomNumberSubject3 = value;
    })
  }


  redirect(parameter:string){
    this.router.navigate(['/test'],{queryParams: {id:1, name: parameter}})
  }

  getNextNumber(){
    this.onboardingService.triggerLatestRandomNumberFromSubject();
  }
}
