import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: string= 'Bunny Bun Todo App';
  todoItem: string;
  todoItems: Array<string> = [];


  constructor() { }

  ngOnInit() {
    this.title = 'Bunny Bun Todo APP'
  }

  updateList() {
    this.todoItems.push(this.todoItem);
    this.todoItem ='';

  }
}