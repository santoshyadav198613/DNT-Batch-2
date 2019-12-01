import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AuthGuard } from '../guards/auth.guard';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeGuard } from './guards/employee.guard';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/add', component: EmployeeAddComponent, canDeactivate : [EmployeeGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
