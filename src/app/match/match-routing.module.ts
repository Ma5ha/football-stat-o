import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachPageComponent } from './mach-page/mach-page.component';


const routes: Routes = [
  {
    path: 'match/statistic/:id',
    component: MachPageComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
