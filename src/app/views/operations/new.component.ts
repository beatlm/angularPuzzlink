import { Component, OnInit } from '@angular/core';
import {Piece}from './piece';

@Component({
  selector: 'pl-new',
  template: `
  <form class="container">
  <label for="description">Description</label>
  <input name="description"
        #inputDescription
        [value]="piece.description"
        (change)="piece.description=inputDescription.value"
        type="text" />

  <label>Tipo de pieza</label>
 <select name="kind" [(ngModel)]="piece.kind">
    <option [value]="">Selecciona un tipo</option>
    <option *ngFor="let kind of kindsOfPieces"
          [value]="kind">{{kind}}</option>
  </select>
  <button (click)="saveOperation()">Save</button>
</form>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public kindsOfPieces = ["Income", "Expense"];
  public piece: Piece = new Piece();

  public title = "Nueva pieza";

  constructor() { }

  ngOnInit() {
  }
  public saveOperation() {
  
  }

}
