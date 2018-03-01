import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'pl-home',
  template: `
  <main>
  <h1>Bienvenid@ a Puzzlink</h1>
  <div>Comienza a crear fichas y unirlas para completar puzzles.</div>
  <p> {{ now }}</p>
</main>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  now = moment().format();
  tomorrow = moment().add(1, "days").format();
  

  constructor() { }

  ngOnInit() {
  }

}
