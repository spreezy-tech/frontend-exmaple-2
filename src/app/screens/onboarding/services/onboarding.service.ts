import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantRequest } from 'src/app/models/restaurant-request';
import { EmployeeDetails } from 'src/app/models/employee-details';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  randomNumberSender : Observable<number> | undefined;
  randomNumberSubject$ = new BehaviorSubject<number>(5);


  constructor(private httpClient : HttpClient) {
    this.randomNumberSender = new Observable((sender) => {
      sender.next(Math.random());
    })
  }

  onboardRestaurant(restaurantRequest : RestaurantRequest){
    console.log(restaurantRequest);

    this.httpClient.post("http://localhost:8081/restro/create", restaurantRequest, {
      responseType: 'text'
    }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getDummyData() {
    const url = "https://dummyjson.com/c/1220-d7eb-45f9-b47e";
    this.httpClient.get(url, {
      responseType: 'json'
    }).subscribe({
      next: (response) => {
        console.log(response);
        return response;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }


  triggerLatestRandomNumberFromSubject(){
    this.randomNumberSubject$.next(Math.random());
  }
}
