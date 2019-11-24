import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription, Observable } from 'rxjs';
import { ITodo } from './services/ITodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todoSubscription: Subscription;
  todos$ : Observable<ITodo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
    // this.todoSubscription = this.todoService.getTodos().subscribe((data) => console.log(data));

  }

  addTodo() {
    this.todoService.addTodo().subscribe((data)=> console.log(data));
  }

  ngOnDestroy() {
    // if(this.todoSubscription) {
    //   this.todoSubscription.unsubscribe();
    // }
  }

}
