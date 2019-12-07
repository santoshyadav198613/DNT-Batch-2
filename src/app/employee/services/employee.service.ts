import { Injectable } from '@angular/core';
import { IEmployee } from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empList: IEmployee[] = [];

  constructor() {
    console.log('new employee instance created');
  }

  getEmployeeList(): IEmployee[] {
    this.empList = [
      { id: 1, name: 'user1', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
      { id: 2, name: 'user2', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
      { id: 3, name: 'user3', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 }
    ];

    return this.empList;
  }

  addEmployee() {
    const emp: IEmployee =  { id: 1, name: 'user1', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 };
    this.empList.push(emp);
  }
}
