import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';
import { NewComponent } from './new.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    OperationsRoutingModule,
    FormsModule,RouterModule
  ],
  declarations: [OperationsComponent, ListComponent, ItemComponent, NewComponent]
})
export class OperationsModule { }
