import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './model/Todo';
import {EntityServices} from '@ngrx/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AOT breaks @ngrx/data';
  todosService;
  todos$: Observable<Todo[]>;

  constructor(entityServices: EntityServices) {
    this.todosService = entityServices.getEntityCollectionService('Todo');
  }

  ngOnInit() {
    this.todos$ = this.todosService.entities$;
    this.todosService.getAll();
  }
}
