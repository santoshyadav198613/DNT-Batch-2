import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITodo } from '../services/ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todoList : ITodo[] = [];
  constructor() { }

  ngOnInit() {

  }

}
