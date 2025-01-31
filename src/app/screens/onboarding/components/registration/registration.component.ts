import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantRequest } from 'src/app/models/restaurant-request';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  restaurantRequest!: RestaurantRequest;

  // restroDetails = new FormGroup({
  //   name: new FormControl<string>('ABC'),
  //   mobile: new FormControl<number>(123456789),
  //   address: new FormControl<string>(''),
  //   city: new FormControl<string>('', Validators.required),
  //   state: new FormControl<string>(''),
  // })

  restroDetails = this.formBuilder.group({
    name: new FormControl<string>('', Validators.required),
    mobile: new FormControl<number>(0),
    address: this.formBuilder.group({
      address : new FormControl<string>(''),
      city: new FormControl<string>(''),
      state: new FormControl<string>('')
    })
  })

  constructor(private formBuilder : FormBuilder, private onboardingService : OnboardingService){}


  captureDetails(){
    if(this.restroDetails.valid){
      this.createRequest(this.restroDetails);
    }
  }

  createRequest(details : FormGroup){
    this.restaurantRequest = new RestaurantRequest();
    this.restaurantRequest.name = details.value.name;
    this.restaurantRequest.mobile = details.value['mobile'];
    this.restaurantRequest.address = details.value['address']['address'];
    this.restaurantRequest.city = details.value['address']['city'];
    this.restaurantRequest.state = details.value['address']['state'];

    this.onboardingService.onboardRestaurant(this.restaurantRequest);
  }
}
