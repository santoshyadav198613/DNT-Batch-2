import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {

  @Input() empList: IEmployee[] = [];
  // @Input() set deptName(data: string) {
  //   if (data !== '') {
  //     throw Error('Please pass department Name');
  //   }
  // }
  @Input() deptName: string;

  @Output() selectedEmployee = new EventEmitter<IEmployee>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if (changes['deptName'] === undefined && changes['deptName'].currentValue === undefined) {
    //   throw Error('Please provide department name')
    // }
  }

  ngOnInit() {
  }

  trackByFn(index: number, item: IEmployee) {
    // console.log(index);
    // console.log(item);
    return item.id;
  }

  currentEmployee(emp: IEmployee) {
    console.log(emp);
    this.selectedEmployee.emit(emp);
  }
}
