import { Injectable } from '@angular/core';
import { Resolve, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { ITodo } from '../services/ITodo';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements CanActivateChild, Resolve<ITodo[]> {
  constructor(private loginService: LoginService, private todoService: TodoService) {

  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isAdmin;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
    return this.todoService.getTodos();
  }

}
