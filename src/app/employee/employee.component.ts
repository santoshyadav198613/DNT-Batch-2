import {
  Component, OnInit,
  ViewChild, ElementRef, AfterViewInit,
  Self, SkipSelf
} from '@angular/core';
import { IEmployee } from './IEmployee';
import { HeaderComponent } from '../header/header.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: `<h1>This Employee Component</h1>
  // <h2>Rendering from template property</h2>`,
  styleUrls: ['./employee.component.css']
  // ,
  // providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent, { static: false }) headerComponent: HeaderComponent;

  @ViewChild('templateDemo', { static: true }) template: ElementRef;

  name: string = 'Amit';
  age = 48;
  departmentName = 'Technology';

  employeeList: IEmployee[];
  // = [
  //   { id: 1, name: 'user1', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
  //   { id: 2, name: 'user2', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 },
  //   { id: 3, name: 'user3', email: 'user1@test.com', dob: new Date('11-Feb-2018'), salary: 45000 }
  // ];

  selectedEmployee: IEmployee;

  toggleDiv = false;

  // empService = new EmployeeService();

  constructor(@SkipSelf() private empService: EmployeeService) { }

  ngOnInit() {
    // this.headerComponent.title = 'Employee View';
    this.employeeList = this.empService.getEmployeeList();
    this.template.nativeElement.innerText = 'Template Value';
  }

  ngAfterViewInit() {
    this.headerComponent.title = 'Employee View';
  }

  toggle() {
    this.toggleDiv = !this.toggleDiv;
  }

  trackByFn(index: number, item: IEmployee) {
    console.log(index);
    console.log(item);
    return item.id;
  }


  receiveFromChild(employee: IEmployee) {
    this.selectedEmployee = employee;
  }

  addEmp() {
    this.empService.addEmployee();
  }

}
