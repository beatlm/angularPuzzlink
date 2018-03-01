import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-footer',
  template: `
    <p>Page powered by @blopezmo    </p>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
