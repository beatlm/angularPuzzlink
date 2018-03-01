import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-operations',
  template: `
    <p>
    <pl-list></pl-list>
      operations works!
      <a routerLink="/operations/new">Nueva pieza</a>
      <router-outlet></router-outlet> 
    </p>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
