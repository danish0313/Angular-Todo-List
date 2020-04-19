import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Todo} from '../../../modal/interface';
import {TodoserviceService} from '../../services/todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

    todo: Array<Todo> ;

  constructor(private todoservice: TodoserviceService ) { }

  ngOnInit(): void {

this.todo = this.todoservice.getTodos();
  }
}
