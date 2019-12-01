import { Injectable } from '@angular/core';
import { CanDeactivate, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanDeactivate<EmployeeAddComponent> {
  canDeactivate(component: EmployeeAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.formPristineState;
  }
}
