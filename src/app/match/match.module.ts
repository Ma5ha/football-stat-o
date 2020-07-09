import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchRoutingModule } from './match-routing.module';
import { MachPageComponent } from './mach-page/mach-page.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './mach-page/bar-chart/bar-chart.component';
import { TacticBoardComponent } from './mach-page/tactic-board/tactic-board.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [MachPageComponent, BarChartComponent, TacticBoardComponent],
  imports: [

    CommonModule,
    MatchRoutingModule,
    NgxChartsModule,
    SharedModule,
    NgbTooltipModule
  ]
})
export class MatchModule { }
