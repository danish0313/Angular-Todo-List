import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor() { }

  getTodos() {

    return   [{
      id: 0,
      title: 'samsung',
      completed: false
   },
   {
    id: 1,
    title: 'nokia',
    completed: true
 },{
  id: 3,
  title: 'apple',
  completed: false
}]


  }
}
