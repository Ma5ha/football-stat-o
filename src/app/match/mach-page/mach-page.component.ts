import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StandigsService } from 'src/app/shared/services/standigs.service';


import { StatisticsEntity } from '../../shared/types/statistics';

@Component({
  selector: 'app-mach-page',
  templateUrl: './mach-page.component.html',
  styleUrls: ['./mach-page.component.scss']
})
export class MachPageComponent implements OnInit {


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


  statistics

  matchID = this.activatedRoute.snapshot.params.id
  constructor(private activatedRoute: ActivatedRoute, private standingsService: StandigsService) { }

  ngOnInit(): void {
    this.getMatchStatistic()


  }

  getMatchStatistic() {


    this.standingsService.getMatchStatisticBy(this.activatedRoute.snapshot.params.id).subscribe(
      response => {
        this.statistics = response[this.matchID.toString()].statistics.map(x => {

          return {


            name: x.type,
            series: [
              {
                statType: x.type,
                name: 'home',
                value: (parseInt(x.home) / (parseInt(x.home) + parseInt(x.away))) * 100,
                normalValue: x.home
              },
              {
                statType: x.type,
                name: 'away',
                value: (parseInt(x.away) / (parseInt(x.home) + parseInt(x.away))) * 100,
                normalValue: x.away
              }

            ]



          }






        })

        console.log(this.statistics)

      }
    )

  }


  format(value) {

    return `${value}%`

  }
  //for delete 



  onSelect(event) {
    console.log(event);
  }





}


