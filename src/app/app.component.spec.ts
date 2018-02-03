import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

// import { Todo } from './todo';
// import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
// import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent,
        // TodoListHeaderComponent,
        // TodoListComponent,
        // TodoListItemComponent,
        // TodoListFooterComponent
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have a newTodo todo`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.newTodo instanceof Todo).toBeTruthy();
  // }));
  // it('should display "Todos" in h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Todos');
  // }));
});
