import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamPageComponent } from './team-page/team-page.component';

import { SharedModule } from '../shared/shared.module'
@NgModule({
  declarations: [TeamPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule,


  ]
})
export class TeamModule { }
