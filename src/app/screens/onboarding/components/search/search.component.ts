import { Component } from '@angular/core';

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

  toggleVisibility(index:number){
    this.employees[index].isVisible = !this.employees[index].isVisible;
  }

  addNewEmployee(){
    this.employees.push({name:'Himanshu', age:22, isVisible:true});
  }
}
