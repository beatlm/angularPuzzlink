import { Component } from '@angular/core';

@Component({
  selector: 'pl-root',
  template: `
  <pl-nav></pl-nav>
  <router-outlet></router-outlet>
  <pl-footer></pl-footer> 
  `,
  styles: []
})
export class AppComponent {
  title = 'Puzzlink';
}
