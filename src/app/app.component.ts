import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; // []
  // public todos: any[]; // undefined
  public title: String = 'Minhas Tarefas';

  // ctor
  constructor() {
    // this. ele se refere ao escopo da classe
    this.todos.push(new Todo(1, 'Tarefa 1', false));
    this.todos.push(new Todo(1, 'Tarefa 1', false));
    this.todos.push(new Todo(1, 'Tarefa 1', true));
  }
}
