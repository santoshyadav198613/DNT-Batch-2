import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  addTodo() {
    let todo = {
      userId: 10,
      title: "Complete Angular Course",
      completed: false
    };
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo);
  }
}
