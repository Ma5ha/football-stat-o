import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TablePageComponent } from './table-page/table-page.component';
import { FixturesTableComponent } from './table-page/fixtures-table/fixtures-table.component';


@NgModule({
  declarations: [TablePageComponent, FixturesTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
