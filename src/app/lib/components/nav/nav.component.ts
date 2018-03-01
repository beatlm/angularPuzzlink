import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-nav',
  template: `
<a class="menu">Menu</a>
<a routerLink="/operations">Operaciones</a>
<router-outlet></router-outlet>    
  `,
  styles: [' a.menu{ background-image:url("../assets/images/menu.svg"); color:red}'
]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
