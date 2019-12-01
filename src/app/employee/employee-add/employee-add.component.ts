import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../IEmployee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  formPristineState = false;
  empModel : IEmployee = {
    id: 0,
    name: '',
    dob : new Date(),
    email : '',
    salary : 0
  };
  constructor() { }

  ngOnInit() {
  }

  addEmp(empForm: NgForm) {
    console.log(this.empModel);
    empForm.resetForm();
    this.formPristineState = true;
  }

}
