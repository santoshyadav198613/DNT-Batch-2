import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { AuthGuard } from '../guards/auth.guard';
import { TodoGuard } from './guards/todo.guard';


const routes: Routes = [
  {
    path: '', component: TodosComponent, canActivate: [AuthGuard],
    resolve : {
      todoList : TodoGuard
    },
    canActivateChild: [TodoGuard],
    children: [
      { path: ':id', component: TodoDetailsComponent }
    ],
    data: {
      pageName: 'Todo',
      pageTitle: 'Todos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
