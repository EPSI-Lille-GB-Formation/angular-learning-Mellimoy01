import { Component } from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  template:`
    <div class="container">
      <h1>Liste des choses à faire</h1>
      <ul *ngFor="let todo of todoList">
        <li *ngIf="!todo.isCompleted">{{ todo.title}}</li>
      </ul>
    </div>
    `,
  styles: []
})
export class AppComponent {
  todoList = TODOS;
  constructor(){}
  ngOnInit(){
    console.table(this.todoList);
    this.selectTodo(8);
  }
  selectTodo(id:number){
    console.table(this.todoList[id-1]);
  }
}
