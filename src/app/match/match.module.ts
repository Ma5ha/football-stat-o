import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MachPageComponent } from './mach-page/mach-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MachPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    MatchRoutingModule
  ]
})
export class MatchModule { }
