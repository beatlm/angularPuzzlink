import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-nav',
  template: `
<a routerLink="/operations">Operaciones</a>    
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
