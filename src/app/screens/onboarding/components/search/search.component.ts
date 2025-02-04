import { Component } from '@angular/core';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  employees = [
    {name: 'Sumit', age: 21, isVisible: true },
    {name: 'Shruti', age: 20, isVisible: true },
    {name: 'Sairaj', age: 20, isVisible: true },
  ];

  posts = [
    {name: 'Sumit', age: 21, type: 'reel' },
    {name: 'Shruti', age: 20, type: 'reel' },
    {name: 'Sairaj', age: 20, type: 'post' },
  ];

  currentObservableNumber : number = 0;
  currentObservableNumber2 : number = 0;

  currentRandomNumberSubject : number = 0;

  constructor(private onboardingService : OnboardingService){
    this.onboardingService.randomNumberSender?.subscribe((value) => {
      this.currentObservableNumber = value;
    })

    this.onboardingService.randomNumberSender?.subscribe((value) => {
      this.currentObservableNumber2 = value;
    })

    this.onboardingService.randomNumberSubject$.subscribe((value) => {
      this.currentRandomNumberSubject = value;
    })
  }

  toggleVisibility(index:number){
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }

  addNewEmployee(){
    this.employees.push({name:'Himanshu', age:22, isVisible:true});
  }

  triggerCall(){
    this.onboardingService.getDummyData();
  }
}
