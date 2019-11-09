import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `<h1>This Employee Component</h1>
  // <h2>Rendering from template property</h2>`,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string = 'Amit';
  age = 48;

  employeeList: IEmployee[] = [
    { id: 1, name: 'user1', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
    { id: 2, name: 'user2', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
    { id: 3, name: 'user3', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 }
  ];

  toggleDiv = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleDiv = !this.toggleDiv;
  }

}
