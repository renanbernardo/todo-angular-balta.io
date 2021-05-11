import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  // ctor
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })
    // this. se refere ao escopo da classe
    this.todos.push(new Todo(1, 'Tarefa 1', false));
    this.todos.push(new Todo(2, 'Tarefa 2', false));
    this.todos.push(new Todo(3, 'Tarefa 3', true));
    this.todos.push(new Todo(4, 'Tarefa 4', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);    
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

}
