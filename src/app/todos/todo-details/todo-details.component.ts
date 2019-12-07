import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoId: number;
  constructor(private route: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      this.todoId = + data.get('id');
      this.todoService.getTodoById(this.todoId).subscribe(
        (data) => console.log(data)
      );
    });
  }


}
