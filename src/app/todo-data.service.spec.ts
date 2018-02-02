import { TestBed, inject, async } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should reove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anythig if todo with corresponging id is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(4);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});

      service.addTodo(todo1);

      const updatedTodo = service.updateTodoById(1, { title: 'new title' });

      expect(updatedTodo.id).toEqual(1);
      expect(updatedTodo.title).toEqual('new title');
      expect(updatedTodo.complete).toEqual(false);
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});

      service.addTodo(todo1);

      const updatedTodo = service.updateTodoById(2, { title: 'new title' });

      expect(updatedTodo).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});

      service.addTodo(todo1);

      const updatedTodo = service.toggleTodoComplete(todo1);

      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo1)
      expect(updatedTodo.complete).toEqual(false);
    }));
  });
});
