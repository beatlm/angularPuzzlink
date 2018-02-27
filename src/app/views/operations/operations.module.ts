import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule
  ],
  declarations: [OperationsComponent, ListComponent, ItemComponent]
})
export class OperationsModule { }
