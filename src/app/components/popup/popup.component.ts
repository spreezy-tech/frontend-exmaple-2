import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetails } from 'src/app/models/employee-details';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  @Input() name : string = 'undefined';
  @Input() employeeDetails !: EmployeeDetails;
  @Output() visibilityEvent = new EventEmitter<string>();

  changeVisibility(employeeName : string){
    this.visibilityEvent.emit(employeeName);
  }
}
