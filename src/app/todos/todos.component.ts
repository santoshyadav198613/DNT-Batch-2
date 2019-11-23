import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todoSubscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoSubscription = this.todoService.getTodos().subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    if(this.todoSubscription) {
      this.todoSubscription.unsubscribe();
    }
  }


}
