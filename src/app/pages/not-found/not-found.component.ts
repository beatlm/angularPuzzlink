import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-not-found',
  template: `
  <h1>No se ha podido encontrar la página solicitada.</h1>
  <h2>404</h2>
  <a routerLink="/">Inicio</a>
`,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
