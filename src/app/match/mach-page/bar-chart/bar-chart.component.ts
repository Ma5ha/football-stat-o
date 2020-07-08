import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  statistics


  view: any[] = [700, 400];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;

  showLegend: boolean = true;
  showXAxisLabel: boolean = true;

  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Percentage';

  colorScheme = {
    domain: ['#50A0CA', '#64AB47', '#AAAAAA']
  };



  constructor() { }

  ngOnInit(): void {
  }

}
