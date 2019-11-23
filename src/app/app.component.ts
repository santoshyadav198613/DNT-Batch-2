import { Component, DoCheck } from '@angular/core';
import { EmployeeService } from './employee/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ecommerceapp';
  role = 'Users';

  constructor(private empService: EmployeeService) {}

  ngDoCheck() {
    console.log('check event is called');
  }

  addEmp() {
    this.empService.addEmployee();
  }
}
