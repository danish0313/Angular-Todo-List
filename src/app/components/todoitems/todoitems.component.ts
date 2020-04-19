import { Component, OnInit , Input } from '@angular/core';
import {Todo} from '../../../modal/interface';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  @Input() todo: Todo ;
  constructor() { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
let classes = {
todo : true ,
'is-completed' :  this.todo.completed
}

return classes;

  }
// onchange
onchange(todo) {
todo.completed = !todo.completed;

}

ondelete(todo){
  console.log('deleted');
}



}
