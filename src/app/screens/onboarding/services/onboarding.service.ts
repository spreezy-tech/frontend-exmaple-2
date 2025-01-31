import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantRequest } from 'src/app/models/restaurant-request';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private httpClient : HttpClient) { }

  onboardRestaurant(restaurantRequest : RestaurantRequest){
    console.log(restaurantRequest);
  }
}
