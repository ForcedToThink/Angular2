import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodoById(id: number): Observable<null> {
    return this.api.deleteTodoById(id);
  }

  updateTodoById(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
