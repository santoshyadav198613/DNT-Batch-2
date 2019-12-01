import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { StatusPipe } from './pipes/status.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { TitlePipe } from './pipes/title.pipe';


@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    TodoDetailsComponent,
    StatusPipe,
    TitlePipe
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
