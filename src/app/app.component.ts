import { Component } from '@angular/core';

@Component({
  selector: 'pl-root',
  template: `
  <pl-nav></pl-nav>
  <pl-home></pl-home>
  <pl-footer></pl-footer> 
  `,
  styles: []
})
export class AppComponent {
  title = 'Puzzlink';
}
