import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePageComponent } from './table-page/table-page.component';


const routes: Routes = [{
  path: 'table',
  component: TablePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
