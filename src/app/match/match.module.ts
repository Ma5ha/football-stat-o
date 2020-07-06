import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MachPageComponent } from './mach-page/mach-page.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [MachPageComponent],
  imports: [

    CommonModule,
    MatchRoutingModule,
    NgxChartsModule,
    SharedModule,
  ]
})
export class MatchModule { }
